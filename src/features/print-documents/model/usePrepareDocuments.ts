import { meetings } from "@/entities/delivery";
import { useEffect, useRef } from "react";
import { PREPARE_BATCH_KEY, usePrepareDocumentsMutation } from "../api/documentsApi";

const ids = meetings.map((meet) => meet.documentId).filter((id) => id !== undefined);

export function usePrepareDocuments() {
    const sentRef = useRef(false);
    const [prepareDocuments] = usePrepareDocumentsMutation({
        fixedCacheKey: PREPARE_BATCH_KEY,
    });

    useEffect(() => {
        if (ids.length > 0 && !sentRef.current) {
            sentRef.current = true;
            prepareDocuments(ids);
        }
    }, [prepareDocuments]);
}
