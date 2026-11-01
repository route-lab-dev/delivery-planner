import { ActionPill, SortIcon, BottomSheet } from "@/shared/ui";
import styles from "./NavSort.module.css";
import { useState } from "react";

export function NavSort() {
    const [openSort, setOpenSort] = useState(false);
    const [openActive, setOpenActive] = useState(false);
    const [openIntervals, setOpenIntervals] = useState(false);

    const [activeStatusSort, setActiveStatusSort] = useState("По срочности");
    const [activeStatusActive, setActiveStatusActive] = useState("Активные");
    const [activeStatusIntervals, setActiveStatusIntervals] = useState("Интервалы");

    const titleSort = ["По срочности", "Базовая сортировка", "Свой порядок"];
    const titleStatus = ["Активные", "Согласованные", "Выданные", "Отменённые", "Все"];
    const titleIntervals = ["Все", "10-12", "12-14", "14-16", "16-18", "18-20"];

    return (
        <>
            <div className={styles.navSort}>
                <ActionPill
                    text="Сортировка"
                    icon={<SortIcon />}
                    label="Сортировка"
                    selected={openSort}
                    open={openSort}
                    onClick={() => setOpenSort(true)}
                />

                <ActionPill
                    text={activeStatusActive}
                    count={10}
                    selected={openActive}
                    open={openActive}
                    onClick={() => setOpenActive(true)}
                />

                <ActionPill
                    text={activeStatusIntervals}
                    selected={openIntervals}
                    open={openIntervals}
                    onClick={() => setOpenIntervals(true)}
                />
            </div>

            <BottomSheet
                open={openSort}
                active={activeStatusSort}
                title={"Сортировка"}
                children={titleSort}
                onClose={() => setOpenSort(false)}
                onChange={(child) => setActiveStatusSort(child)}
            />

            <BottomSheet
                open={openActive}
                active={activeStatusActive}
                title="Активные"
                children={titleStatus}
                onClose={() => setOpenActive(false)}
                onChange={(child) => setActiveStatusActive(child)}
            />

            <BottomSheet
                open={openIntervals}
                active={activeStatusIntervals === "Интервалы" ? "Все" : activeStatusIntervals}
                title="Интервалы"
                children={titleIntervals}
                onClose={() => setOpenIntervals(false)}
                onChange={(child) => setActiveStatusIntervals(child)}
            />
        </>
    );
}
