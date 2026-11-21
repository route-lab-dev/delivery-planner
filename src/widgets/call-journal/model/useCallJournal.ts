import { useAppSelector } from "@/app/hooks";
import { buildJournal, type JournalRow } from "./buildJournal";
import { selectMissCalls } from "@/features/miss-call";
import { meetings } from "@/entities/delivery";

export function useCallJournal(): JournalRow[] {
    const item = useAppSelector(selectMissCalls);
    return buildJournal(item, meetings);
}
