import { usePrepareDocuments } from "@/features/print-documents";
import { DeliveriesPage } from "@/pages/deliveries";

export default function App() {
    usePrepareDocuments();
    return (
        <main>
            <DeliveriesPage />
        </main>
    );
}
