"use client";

import { FormHelperText, TextField } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import { Holiday } from "../interfaces/holidays";
import React from "react";

const StyledP = styled.p`
    font-family: "Cascadia Code", serif;
    text-decoration: none;
    color: #AC9D56;
    font-size: calc(5px + 2vh);
`;

const StyledButton = styled.button`
    background-color: #FAFEED;
    padding: 2vh;
    width: 20vh;
    text-align: center;
    margin: 5vh 0;
    border: none;
`;

type FormProps = {
    action: (holidays: Holiday[]) => void;
    onErrorAction: (message: string) => void;   // <-- Added this to handle errors with ErrorMessage.tsx
};

export default function Form({ action, onErrorAction }: FormProps) {
    const [day, setDay] = useState("");
    const [month, setMonth] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Basic validation before fetching
        const monthNum = parseInt(month, 10);
        const dayNum = parseInt(day, 10);

        if (
            isNaN(monthNum) || monthNum < 1 || monthNum > 12 ||
            isNaN(dayNum) || dayNum < 1 || dayNum > 31
        ) {
            onErrorAction("Please enter a valid month (1–12) and day (1–31).");
            return;
        }

        try {
            const res = await fetch(`/api/holidays?month=${monthNum}&day=${dayNum}`);
            if (!res.ok) {
                onErrorAction("Fetch error");
            }

            const data = await res.json();
            action(data.holidays || []);
            onErrorAction(""); // Clear any old errors if successful
        } catch (err: unknown) {
            console.error(err);
            onErrorAction("Something went wrong. Please try again."); // Fetch failure error
        }
    };

    return (
        <form className="w-6/7 rounded-xl p-4" onSubmit={handleSubmit}>
            <FormHelperText>Month</FormHelperText>
            <TextField
                variant="filled"
                sx={{ backgroundColor: "white", width: "100%" }}
                value={month}
                placeholder="MM"
                onChange={(e) => setMonth(e.target.value)}
            />
            <div className="flex m-4">
                <FormHelperText className="w-full">Day</FormHelperText>
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
