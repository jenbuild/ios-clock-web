export function formatTime(
    date: Date,
    timezone: string
) {
    return new Intl.DateTimeFormat("en-US", {
        timeZone: timezone,
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
    }).format(date);
}