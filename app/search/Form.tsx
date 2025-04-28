"use client"
import { FormHelperText, TextField } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
// import { Holiday } from "../interfaces/holidays";
//import {GET} from "@/app/api/holidays/route";

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

    // Local state to store the holidays returned by the API
    //const [holidays, setHolidays] = useState<Holiday[]>([]);


    const fetchHolidays = async () => {
        try {
            const response = await fetch(`/api/holidays?month=${month}&day=${day}`);
            const data = await response.json();
            console.log(data.holidays); // Do whatever you want with the data
        } catch (err) {
            console.error(err);
        }
    };



    /*
    // fetchHolidays is triggered when the user submits a date via the input form
    // It calls the API route with query parameters for month and day, and updates state with the result
    // Completed by Jessica Cannon
    const fetchHolidays = async (month: string, day: string) => {
        const res = await fetch(`/api/holidays?month=${month}&day=${day}`);
        const data = await res.json();
        setHolidays(data.holidays || []); // Default to empty array if response is invalid or empty
    };*/

    return (
        <form
            className="w-6/7 rounded-xl p-4"
            onSubmit={(e) => {
                e.preventDefault();
                setError("");
                console.log(month,day);
                fetchHolidays() }}
                /* => {
                    try {
                        const response = await fetch(`/api/holidays?month=${month}&day=${day}`);
                        if (!response.ok) {
                            throw new Error("Network response was not ok");
                        }
                        const data = await response.json();
                        console.log(data.holidays); // Do whatever you want with the data
                    } catch((err) => {
                        console.error(err)
                        if (err.message == "Date invalid"){
                            setError("That date is invalid. Try a different one!");
                        }
                        else {
                            setError("Something went wrong. Please try again.");
                        }
                    })
            }}*/
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
