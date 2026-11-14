const timeFormat = new Intl.DateTimeFormat("ru-RU", { hour: "2-digit", minute: "2-digit" });
const dateTimeFormat = new Intl.DateTimeFormat("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
});

export function formatCallTimes(iso: string, now: Date = new Date()): string {
    const date = new Date(iso);
    if (Number.isNaN(date.getTime())) return "";

    return date.toDateString() === now.toDateString()
        ? timeFormat.format(date)
        : dateTimeFormat.format(date);
}
