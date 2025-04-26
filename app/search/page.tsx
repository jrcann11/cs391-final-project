"use client";

import styled from "styled-components";
import Form from "../components/Form";
import { Holiday } from "../interfaces/holidays";
import { useState } from "react";

const StyledMain = styled.div`
    height: 86vh;
    background-color: #E7F3F3;
`;

export default function Search() {
    // Local state to store the holidays returned by the API
    const [holidays, setHolidays] = useState<Holiday[]>([]);

    // fetchHolidays is triggered when the user submits a date via the input form
    // It calls the API route with query parameters for month and day, and updates state with the result
    // Completed by Jessica Cannon


    // fetchHolidays can be used with the input form UI component below
    // holidays can be used with holiday display UI component below (will delete these comments later)

    return (
        <StyledMain>
            <Form action={setHolidays} />
            {/* Here you can map over holidays and show them */}
            <div className="mt-6">
                {holidays.length > 0 ? (
                    holidays.map((holiday) => (
                        <div key={holiday.name + holiday.date.iso}>
                            <h3>{holiday.name}</h3>
                            <p>{holiday.description}</p>
                        </div>
                    ))
                ) : (
                    <p>No holidays found yet. Search above!</p>
                )}
            </div>
        </StyledMain>
    );
}