import {useState, useEffect} from "react";
import {Holiday} from "@/app/interfaces/holidays";

export default async function FetchHolidays(month:string, day:string){
    // Local state to store the holidays returned by the API
    const [holidays, setHolidays] = useState<Holiday[]>([]);

    // fetchHolidays is triggered when the user submits a date via the input form
    // It calls the API route with query parameters for month and day, and updates state with the result
    // Completed by Jessica Cannon
    const res = await fetch(`/api/holidays?month=${month}&day=${day}`);
    const data = await res.json();
    setHolidays(data.holidays || []); // Default to empty array if response is invalid or empty
}