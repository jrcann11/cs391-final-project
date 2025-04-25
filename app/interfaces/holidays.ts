// Purpose: Defines the structure of holiday data returned by the Calendarific API.
// Completed by: Jessica Cannon
export type Holiday = {
    name: string; // The name of the holiday
    description: string; // A short description of the holiday
    date: {
        iso: string; // ISO 8601 formatted date string (e.g., "2025-07-04")
        datetime: {
            year: number; // The year the holiday occurs
            month: number; // The month (1–12)
            day: number; // The day (1–31)
        };
    };
    type: string[]; // The category associated with the holiday (e.g., "National holiday", "Local observance", etc.)
};