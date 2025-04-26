"use client"
import { FormHelperText, TextField } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
// import { Holiday } from "../interfaces/holidays";
import {GET} from "@/app/api/holidays/route";

const StyledP = styled.p`
    font-family: "Cascadia Code",serif;
    text-decoration: none;
    color: #AC9D56;
    font-size: calc(5px + 2vh);
`
const StyledButton = styled.button`
    background-color: #FAFEED;
    padding: 2vh;
    width: 20vh;
    text-align: center;
    margin: 5vh 0; 
    border: none;
`
export default function Form() {
    const [day, setDay] = useState("");
    const [month, setMonth] = useState("");
    const [error, setError] = useState("");
    return (
        <form
            className="w-6/7 rounded-xl p-4"
            onSubmit={(e) => {
                e.preventDefault();
                setError("");
                console.log(month,day);
                GET(month, day)
                    //.then((p) => append(p))
                    .catch((err) => {
                        console.error(err)
                        if (err.message == "Date invalid"){
                            setError("That date is invalid. Try a different one!");
                        }
                        else {
                            setError("Something went wrong. Please try again.");
                        }
                    })
            }}
        >
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
