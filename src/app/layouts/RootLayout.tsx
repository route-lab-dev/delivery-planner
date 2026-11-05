import { Outlet } from "react-router-dom";
import { usePrepareDocuments } from "@/features/print-documents";

export function RootLayout() {
    usePrepareDocuments();
    return (
        <main>
            <Outlet />
        </main>
    );
}
