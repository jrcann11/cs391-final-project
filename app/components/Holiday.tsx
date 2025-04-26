"use client";

import { useEffect, useState } from "react";
import { Holiday } from "@/app/interfaces/holidays";
import styled from "styled-components";
import { HolidayDisplayProps } from "../HolidayDisplayProps";


const StyledMain = styled.div`
 min-height: 86vh;
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
 box-shadow: 0px 2px 8px rgba(0,0,0,0.1);
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


export default function HolidayDisplay({ month, day }: HolidayDisplayProps) {
    const [holidays, setHolidays] = useState<Holiday[]>([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchHolidays = async () => {
            try {
                const res = await fetch(`/api/holidays?month=${month}&day=${day}`);
                const data = await res.json();
                setHolidays(data.holidays || []);
            } catch (error) {
                console.error("Error fetching holidays:", error);
            } finally {
                setLoading(false);
            }
        };


        fetchHolidays();
    }, [month, day]); // Re-fetch if month/day props change


    if (loading) {
        return <StyledMain><StyledH1>Loading holidays...</StyledH1></StyledMain>;
    }


    if (holidays.length === 0) {
        return (
            <StyledMain>
                <StyledH1>No holidays found for {month}/{day}.</StyledH1>
            </StyledMain>
        );
    }


    return (
        <StyledMain>
            <StyledH1>Holidays on {month}/{day}</StyledH1>
            <StyledUl>
                {holidays.map((holiday) => (
                    <StyledLi key={`${holiday.name}-${holiday.type.join(",")}-${holiday.date.iso}`}>
                        <HolidayName>{holiday.name}</HolidayName>
                        <HolidayDescription>{holiday.description}</HolidayDescription>
                        <HolidayType>Type: {holiday.type.join(", ")}</HolidayType>
                    </StyledLi>
                ))}
            </StyledUl>
        </StyledMain>
    );
}


