"use client";

import { Holiday } from "@/app/interfaces/holidays";
import styled from "styled-components";

type HolidayDisplayProps = {
    holidays: Holiday[];
};

const StyledMain = styled.div`
    width: 100%;
    background-color: #E7F3F3;
    padding: 2vh 4vw;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledH1 = styled.h1`
    font-family: Tahoma, serif;
    font-size: calc(10px + 3vh);
    color: #61ACBF;
    margin-bottom: 2vh;
    text-align: center;
`;

const StyledUl = styled.ul`
    list-style: none;
    padding: 0;
    width: 100%;
    max-width: 800px;
`;

const StyledLi = styled.li`
    background-color: white;
    border-radius: 12px;
    padding: 2vh 2vw;
    margin-bottom: 2vh;
    box-shadow: 0 2 8px rgba(0,0,0,0.1);
`;

const HolidayName = styled.h2`
    font-family: Tahoma, serif;
    color: #61ACBF;
    font-size: calc(8px + 2vh);
    margin-bottom: 1vh;
`;

const HolidayDescription = styled.p`
    font-family: "Cascadia Code", serif;
    font-size: calc(5px + 1.5vh);
    line-height: 1.6;
    color: #333;
    margin-bottom: 1vh;
`;

const HolidayType = styled.p`
    font-family: "Cascadia Code", serif;
    font-size: calc(4px + 1.3vh);
    color: #777;
`;

export default function HolidayDisplay({ holidays }: HolidayDisplayProps) {
    if (holidays.length === 0) {
        return (
            <StyledMain>
                <StyledH1>No holidays found. Search above!</StyledH1>
            </StyledMain>
        );
    }

    return (
        <StyledMain>
            <StyledH1>Holidays</StyledH1>
            <StyledUl>
                {holidays.map((holiday) => (
                    <StyledLi key={`${holiday.name}-${holiday.date.iso}`}>
                        <HolidayName>{holiday.name}</HolidayName>
                        <HolidayDescription>{holiday.description}</HolidayDescription>
                        <HolidayType>Type: {holiday.type.join(", ")}</HolidayType>
                    </StyledLi>
                ))}
            </StyledUl>
        </StyledMain>
    );
}


