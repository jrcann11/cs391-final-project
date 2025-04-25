// Purpose: Main page where users input a date and view related U.S. holidays.
// Completed by: Jessica Cannon & ...
"use client";
import {useState} from "react";
import {Holiday} from "@/app/interfaces/holidays";

export default function Home(){
    // Local state to store the holidays returned by the API
    const [holidays, setHolidays] = useState<Holiday[]>([]);

    // fetchHolidays is triggered when the user submits a date via the input form
    // It calls the API route with query parameters for month and day, and updates state with the result
    // Completed by Jessica Cannon
    const fetchHolidays = async (month: string, day: string) => {
        const res = await fetch(`/api/holidays?month=${month}&day=${day}`);
        const data = await res.json();
        setHolidays(data.holidays || []); // Default to empty array if response is invalid or empty
    };

    // fetchHolidays can be used with the input form UI component below
    // holidays can be used with holiday display UI component below (will delete these comments later)
    return(
      <>
      </>
  );
}
