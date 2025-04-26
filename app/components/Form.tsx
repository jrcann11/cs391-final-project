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
};

export default function Form({ action }: FormProps) {
    const [day, setDay] = useState("");
    const [month, setMonth] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        try {
            const res = await fetch(`/api/holidays?month=${month}&day=${day}`);
            if (!res.ok) {
                throw new Error("Fetch error");
            }

            const data = await res.json();
            action(data.holidays || []);
        } catch (err: any) {
            console.error(err);
            if (err.message === "Date invalid") {
                setError("That date is invalid. Try a different one!");
            } else {
                setError("Something went wrong. Please try again.");
            }
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
            <FormHelperText>{error}</FormHelperText>
            <div className="w-full flex justify-center">
                <StyledButton type="submit">
                    <StyledP>Find Holidays!</StyledP>
                </StyledButton>
            </div>
        </form>
    );
}
