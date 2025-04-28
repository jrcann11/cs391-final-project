/* Purpose: Takes in a user-inputted month & day. If the date is valid, the date
is submitted to the backend server. If invalid, an error message is displayed.
 Created by: Sophia Tang, Jessica Cannon
*/
"use client";

import { FormHelperText, TextField } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import { Holiday } from "../interfaces/holidays";
import React from "react";

// styling for Button text
const StyledP = styled.p`
    font-family: "Cascadia Code", serif;
    text-decoration: none;
    color: #AC9D56;
    font-size: calc(5px + 2vh);
    margin: 2vh .5vh;
`;
// Find Holiday Button styling
const StyledButton = styled.button`
    background-color: #FAFEED;
    width: 40vh;
    text-align: center;
    margin: 5vh 0;
    border: none;
    cursor: pointer;
`;

// props for Form component
type FormProps = {
    action: (holidays: Holiday[]) => void;
    onErrorAction: (message: string) => void;   // <-- Added this to handle errors with ErrorMessage.tsx
};

export default function Form({ action, onErrorAction }: FormProps) {
    // user-inputted day & month
    const [day, setDay] = useState("");
    const [month, setMonth] = useState("");

    // when button submitted, event formed
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Basic validation before fetching
        const monthNum = parseInt(month, 10);
        const dayNum = parseInt(day, 10);

        if ( // if month & day are invalid, return an error
            isNaN(monthNum) || monthNum < 1 || monthNum > 12 ||
            isNaN(dayNum) || dayNum < 1 || dayNum > 31
        ) {
            onErrorAction("Please enter a valid month (1–12) and day (1–31).");
            return;
        }
        else if ( // if day = 31 and month has less than 31 days, return an error
            (monthNum %2 == 0 && monthNum < 7 && dayNum > 30) ||
            (monthNum %2 == 1 && monthNum > 8 && dayNum > 30)
        )
        {
            onErrorAction("Please enter a valid day (1–30).");
            return;
        }
        else if (monthNum == 2 && dayNum > 28) {
            // limited days in February, return an error
            onErrorAction("Please enter a valid day (1–28).");
            return;
        }

        // if valid, send request with month & date to backend server
        try {
            const res = await fetch(`/api/holidays?month=${monthNum}&day=${dayNum}`);
            if (!res.ok) {
                onErrorAction("Fetch error");
            }
            const data = await res.json();
            action(data.holidays || []);
            onErrorAction(""); // Clear any old errors if successful
        } catch (err: unknown) {
            // log unknown errors
            console.error(err);
            onErrorAction("Something went wrong. Please try again."); // Fetch failure error
        }
    };
    // returns form UI component, with submission fields & labels & the find holidays button
    return (
        <form className="w-6/7 rounded-xl p-4" onSubmit={handleSubmit}>
            <FormHelperText
                sx={{ textAlign: "center", fontFamily: "Cascadia Code, serif",
                color: "#AC9D56", fontSize: "calc(5px + 2vh)" }}
                >Month</FormHelperText>
            <TextField
                variant="filled"
                sx={{ backgroundColor: "white", width: "100%" }}
                value={month}
                placeholder="MM"
                onChange={(e) => setMonth(e.target.value)}
            />
            <div className="flex m-4">
                <FormHelperText
                    sx={{ textAlign: "center", fontFamily: "Cascadia Code, serif",
                    color: "#AC9D56", fontSize: "calc(5px + 2vh)" }}
                    >Day</FormHelperText>
                <TextField
                    variant="filled"
                    sx={{ backgroundColor: "white", width: "100%" }}
                    value={day}
                    placeholder="DD"
                    onChange={(e) => setDay(e.target.value)}
                />
            </div>

            <div className="w-full flex justify-center">
                <StyledButton type="submit">
                    <StyledP>Find Holidays!</StyledP>
                </StyledButton>
            </div>
        </form>
    );
}
