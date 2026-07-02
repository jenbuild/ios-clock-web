export function getCityTime(
    timezone: string
) {
    const now = new Date();

    return new Intl.DateTimeFormat("en-US", {
        timeZone: timezone,
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
    }).formatToParts(now);
}

export function formatCityTime(timezone: string) {

    const parts = getCityTime(timezone);

    return {
        hour: parts.find(p => p.type === "hour")?.value ?? "",
        minute: parts.find(p => p.type === "minute")?.value ?? "",
        period: parts.find(p => p.type === "dayPeriod")?.value ?? "",
    };

}

export function getRelativeDay(timezone: string) {

    const local = new Date();

    const remote = new Date(
        local.toLocaleString("en-US", {
            timeZone: timezone,
        })
    );

    const diffDays =
        remote.getDate() - local.getDate();

    let day = "Today";

    if (diffDays === 1)
        day = "Tomorrow";

    if (diffDays === -1)
        day = "Yesterday";

    return day;

}

export function getOffset(timezone: string) {

    const local = new Date();

    const remote = new Date(
        local.toLocaleString("en-US", {
            timeZone: timezone,
        })
    );

    const diff =
        (remote.getTime() - local.getTime()) / 60000;

    const sign = diff >= 0 ? "+" : "-";

    const abs = Math.abs(diff);

    const hrs = Math.floor(abs / 60);

    const mins = Math.floor(abs % 60);

    if (mins === 0)
        return `${sign}${hrs}HRS`;

    return `${sign}${hrs}:${mins
        .toString()
        .padStart(2, "0")}`;
}