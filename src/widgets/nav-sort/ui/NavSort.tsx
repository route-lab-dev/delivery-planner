import { ActionPill, SortIcon } from "@/shared/ui";
import styles from "./NavSort.module.css";

export function NavSort() {
    return (
        <div className={styles.navSort}>
            <ActionPill icon={<SortIcon />} label="Сортировка" />

            <ActionPill text="Активные" count={10} />

            <ActionPill text="Интервалы" />
        </div>
    );
}
