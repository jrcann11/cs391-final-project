/* Purpose: Takes in a user-inputted month & day. If the date is valid, the date
is submitted to the backend server. If invalid, an error message is displayed.
Created by: Sophia Tang
*/
"use client";


import { FormHelperText, TextField } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import { Holiday } from "../interfaces/holidays";
import React from "react";


// Styling for Button text
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


    &:hover {
        background-color: #dcefdc; // Slightly darker on hover
        cursor: pointer;
    }
`;


// Props for Form component
type FormProps = {
    action: (holidays: Holiday[]) => void;
    onErrorAction: (message: string) => void; // Handles errors with ErrorMessage.tsx
    loadingAction: (loading: boolean) => void; // Handles loading status
};


export default function Form({ action, onErrorAction, loadingAction }: FormProps) {
    // User-inputted day & month
    const [day, setDay] = useState("");
    const [month, setMonth] = useState("");


    // When button submitted, event formed
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Check if input is entirely numeric
        if (!/^\d+$/.test(month) || !/^\d+$/.test(day)) {
            onErrorAction("Please enter a valid month (1–12) and day (1–31).");
            return;
        }

        const monthNum = parseInt(month, 10);
        const dayNum = parseInt(day, 10);

        // Check if month and day are within expected numeric ranges
        if (monthNum < 1 || monthNum > 12 || dayNum < 1 || dayNum > 31) {
            onErrorAction("Please enter a valid month (1–12) and day (1–31).");
            return;
        }

        // Month-specific day limit checks
        if (
            (monthNum === 4 || monthNum === 6 || monthNum === 9 || monthNum === 11) && dayNum > 30
        ) {
            onErrorAction("Selected month only has 30 days.");
            return;
        }

        if (monthNum === 2 && dayNum > 28) {
            onErrorAction("February only has 28 days.");
            return;
        }

        // if valid, send request with month & date to backend server
        try {
            loadingAction(true); // Start loading
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
        } finally {
            loadingAction(false); // Stop loading
        }
    };
    // Returns form UI component, with submission fields & labels & the find holidays button
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

