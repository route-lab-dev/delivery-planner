import { useState } from "react";
import DeliveryButtonNote from "./DeliveryButtonNote";

export default function CourierNote() {
    const [openNotes, setOpenNotes] = useState(false);
    const [notes, setNotes] = useState("");

    return (
        <>
            <DeliveryButtonNote onClick={() => setOpenNotes((prev) => !prev)} />
            {openNotes && (
                <textarea
                    aria-label="Заметка"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                />
            )}
        </>
    );
}
