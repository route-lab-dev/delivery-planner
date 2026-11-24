import { titleSwitch } from "@/entities/delivery";
import type { JournalRow } from "../model/buildJournal";
import style from "./CallJournalItem.module.css";
import { Clock, Navigation } from "lucide-react";
import { formatCallTime } from "../lib/formatCallTime";
type Prop = { row: JournalRow };
export function CallJournalItem({ row }: Prop) {
    const { delivery, calledAt } = row;
    return (
        <article className={style.item}>
            <h2 className={style.name}>{titleSwitch(delivery)}</h2>

            <div className={style.row}>
                <Clock className={style.icon} aria-hidden="true" />
                <time dateTime={calledAt}>{formatCallTime(calledAt)}</time>
            </div>

            <div className={style.row}>
                <Navigation className={style.icon} aria-hidden="true" />
            </div>
        </article>
    );
}
