import { useCallJournal } from "../model/useCallJournal";
import { CallJournalItem } from "./CallJournalItem";

export function CallsJournal() {
    const rows = useCallJournal();

    if (rows.length === 0) return <p>НЕ дозвонов нет</p>;

    return (
        <ul>
            {rows.map((row) => (
                <li key={row.id}>
                    <CallJournalItem row={row} />
                </li>
            ))}
        </ul>
    );
}
