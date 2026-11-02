import { DeliveryList } from "@/widgets/delivery-list";
import { NavBar } from "@/widgets/nav-bar";
import { SearchBar } from "@/shared/ui";
import { NavSort } from "@/widgets/nav-sort";
import styles from "./DeliveriesPage.module.css";
import { usePrepareDocuments } from "@/features/print-documents";

export function DeliveriesPage() {
    usePrepareDocuments();
    return (
        <div className={styles.deliveriesPage}>
            <NavBar />
            <SearchBar placeholder="Поиск по номеру, имени или адресу" label="Поиск" />
            <NavSort />
            <DeliveryList />
        </div>
    );
}
