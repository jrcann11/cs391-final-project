// Purpose: API route handler for fetching U.S. holidays based on a user’s birthday.
// Completed by: Jessica Cannon

import { NextResponse } from "next/server";
import { Holiday } from "@/app/interfaces/holidays";

// Ensures the route uses dynamic rendering on each request
export const dynamic = "force-dynamic";

// Calendarific API base URL and secret API key from environment variables
const HOLIDAY_API_KEY = process.env.HOLIDAY_API_KEY;
const BASE_URL = "https://calendarific.com/api/v2/holidays";

export async function GET(request: Request): Promise<NextResponse> {
    // Parse query parameters from URL (e.g., /api/holidays?month=7&day=4)
    const { searchParams } = new URL(request.url);
    const month = searchParams.get("month");
    const day = searchParams.get("day");
    const year = new Date().getFullYear(); // Use the current year for lookup

    // Build the full API request URL with parameters
    const url = `${BASE_URL}?api_key=${HOLIDAY_API_KEY}&country=us&year=${year}`;

    // Fetch holiday data from the API
    const res = await fetch(url);
    if (!res.ok) {
        // Return a JSON error response if the fetch fails
        return NextResponse.json({ error: "Failed to fetch holidays" }, { status: res.status });
    }

    const data = await res.json();
    let holidays: Holiday[] = data.response.holidays;

    // If a specific month and day are provided, filter the holidays accordingly
    if (month && day) {
        holidays = holidays.filter((h: Holiday) =>
            h.date.datetime.month === parseInt(month) &&
            h.date.datetime.day === parseInt(day)
        );
    }

    // Remove duplicates using a Map with key = name + date
    const uniqueMap = new Map<string, Holiday>();
    holidays.forEach((h: Holiday) => {
        const key = `${h.name}-${h.date.iso}`;
        if (!uniqueMap.has(key)) {
            uniqueMap.set(key, h);
        }
    });

    // Convert the Map values back to an array
    const deduplicated = Array.from(uniqueMap.values());

    // Return the filtered and deduplicated holiday list as JSON
    return NextResponse.json({ holidays: deduplicated });
}