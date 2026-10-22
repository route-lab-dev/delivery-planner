import usePrepareDocuments from "./hooks/usePrepareDocuments";
import DeliveriesPage from "./components/DeliveriesPage";

export default function App() {
    usePrepareDocuments();
    return (
        <main>
            <DeliveriesPage />
        </main>
    );
}
