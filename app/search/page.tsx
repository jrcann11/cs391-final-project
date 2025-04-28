"use client";

import styled from "styled-components";
import Form from "../components/Form";
import { Holiday } from "../interfaces/holidays";
import { useState } from "react";
import HolidayDisplay from "../components/HolidayDisplay";
import ErrorMessage from "../components/ErrorMessage"; // <-- import ErrorMessage

const StyledMain = styled.div`
    width: 100%;
    background-color: #E7F3F3;
    flex: 1;
    padding: 2vh 4vw;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default function Search() {
    const [holidays, setHolidays] = useState<Holiday[]>([]);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    return (
        <StyledMain>
            {/* ErrorMessage displayed only if there's an error */}
            {errorMessage && (
                <ErrorMessage
                    message={errorMessage}
                    onClose={() => setErrorMessage(null)}
                />
            )}

            {/* Form gets a modified action if you want to set error in the future */}
            <Form action={setHolidays} onErrorAction={setErrorMessage} />

            <div className="mt-6">
                <HolidayDisplay holidays={holidays} />
            </div>
        </StyledMain>
    );
}