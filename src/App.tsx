import { usePrepareDocuments } from "@/features/print-documents";
import DeliveriesPage from "./components/DeliveriesPage";

export default function App() {
    usePrepareDocuments();
    return (
        <main>
            <DeliveriesPage />
        </main>
    );
}
