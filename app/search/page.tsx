/* Purpose: This page allows users to search for holidays based on a user-inputted date.
 It uses a form to gather input, displays loading status while fetching, shows error messages
 if needed, and displays holidays after search using multiple of our components. This page
 combines these components and helps display them all nicely for the user to use.
Created by: Jessica Cannon, Alyssa Najera
*/


"use client";


import styled from "styled-components";
import Form from "../components/Form";
import { Holiday } from "../interfaces/holidays";
import { useState } from "react";
import HolidayDisplay from "../components/HolidayDisplay";
import ErrorMessage from "../components/ErrorMessage";
import GlobalStyle from "@/app/components/GlobalStyle";


// Styled container for the whole page content
const StyledMain = styled.div`
    width: auto;
    background-color: #E7F3F3;
    flex: 1;
    padding: 2vh 4vw;
    display: flex;
    flex-direction: column;
    align-items: center;
`;


// Styled "Loading..." message while fetching data
const StyledLoading = styled.h2`
   font-family: "Cascadia Code", serif;
   color: #61ACBF;
   font-size: calc(10px + 3vh);
   text-align: center;
`;


export default function Search() {
    const [holidays, setHolidays] = useState<Holiday[]>([]); // State to hold retrieved holidays
    const [errorMessage, setErrorMessage] = useState<string | null>(null); // State to hold an error message
    const [hasSearched, setHasSearched] = useState(false); // Track if search attempted
    const [loading, loadingAction] = useState(false);     // Track loading


    return (
        <>
            <GlobalStyle />
            <StyledMain>
                {/* If there's an error, display the error message at the top */}
                {errorMessage && (
                    <ErrorMessage
                        message={errorMessage}
                        onClose={() => setErrorMessage(null)} // Clear the error message when closed
                    />
                )}


                {/* Render the search form */}
                {/* Pass down the functions that update the states based on form result */}
                <Form
                    action={(data) => {
                        // Successfully retrieved holiday data. Updates state
                        setHolidays(data);
                        setHasSearched(true);
                    }}
                    onErrorAction={(msg) => {
                        // An error occurred during search. Shows error
                        setErrorMessage(msg);
                        setHasSearched(true);
                    }}
                    loadingAction={loadingAction} // Form can set loading true/false when fetching
                />


                {/* Section below form: Shows "Loading..." or the holiday results (if any) */}
                <div className="mt-6">
                    {loading ? (
                        <StyledLoading>Loading...</StyledLoading>
                    ) : (
                        <HolidayDisplay holidays={holidays} hasSearched={hasSearched} />
                    )}
                </div>
            </StyledMain>
        </>
    );
}
