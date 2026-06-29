export interface ClockCity {
    id: string;
    city: string;
    timezone: string;
}

export const clocks: ClockCity[] = [
    {
        id: "kolkata",
        city: "New Delhi",
        timezone: "Asia/Kolkata",
    },
    {
        id: "dhaka",
        city: "Dhaka",
        timezone: "Asia/Dhaka",
    },
    {
        id: "dubai",
        city: "Dubai",
        timezone: "Asia/Dubai",
    },
    {
        id: "kuwait",
        city: "Kuwait",
        timezone: "Asia/Kuwait",
    },
    {
        id: "cambridge",
        city: "Cambridge Bay",
        timezone: "America/Cambridge_Bay",
    },
];