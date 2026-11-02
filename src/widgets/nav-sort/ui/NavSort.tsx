import { ActionPill, SortIcon, BottomSheet, OptionList } from "@/shared/ui";
import styles from "./NavSort.module.css";
import { useState } from "react";

const SORT_OPTIONS = [
    { label: "По срочности" },
    { label: "Базовая сортировка" },
    { label: "Свой порядок" },
];

const STATUS_OPTIONS = [
    { label: "Активные", count: 10 },
    { label: "Согласованные", count: 4 },
    { label: "Выданные", count: 16 },
    { label: "Отменённые", count: 2 },
    { label: "Все", count: 32 },
];

const INTERVAL_OPTIONS = [
    { label: "Все" },
    { label: "10-12" },
    { label: "12-14" },
    { label: "14-16" },
    { label: "16-18" },
    { label: "18-20" },
];

export function NavSort() {
    // какая шторка открыта
    const [openSort, setOpenSort] = useState(false);
    const [openActive, setOpenActive] = useState(false);
    const [openIntervals, setOpenIntervals] = useState(false);

    // какой статус выбран
    const [activeStatusSort, setActiveStatusSort] = useState("По срочности");
    const [activeStatusActive, setActiveStatusActive] = useState("Активные");
    const [activeStatusIntervals, setActiveStatusIntervals] = useState("Все");

    // количество активных статусов
    const statusCount = STATUS_OPTIONS.find(({ label }) => label === activeStatusActive)?.count;

    return (
        <>
            <div className={styles.navSort}>
                <ActionPill
                    text="Сортировка"
                    icon={<SortIcon />}
                    selected={activeStatusSort !== "По срочности"} // проверка, чтобы затемнять только при уникальном статусе
                    open={openSort} // открыта ли шторка
                    onClick={() => setOpenSort(true)}
                />

                <ActionPill
                    text={activeStatusActive}
                    count={statusCount}
                    selected={activeStatusActive !== "Активные"}
                    open={openActive}
                    onClick={() => setOpenActive(true)}
                />

                <ActionPill
                    text={activeStatusIntervals === "Все" ? "Интервалы" : activeStatusIntervals}
                    selected={activeStatusIntervals !== "Все"}
                    open={openIntervals}
                    onClick={() => setOpenIntervals(true)}
                />
            </div>

            <BottomSheet open={openSort} title="Сортировка" onClose={() => setOpenSort(false)}>
                <OptionList
                    options={SORT_OPTIONS}
                    value={activeStatusSort}
                    onChange={(label) => {
                        setActiveStatusSort(label);
                        setOpenSort(false);
                    }}
                />
            </BottomSheet>

            <BottomSheet open={openActive} title="Статус" onClose={() => setOpenActive(false)}>
                <OptionList
                    options={STATUS_OPTIONS}
                    value={activeStatusActive}
                    onChange={(label) => {
                        setActiveStatusActive(label);
                        setOpenActive(false);
                    }}
                />
            </BottomSheet>

            <BottomSheet
                open={openIntervals}
                title="Интервалы"
                onClose={() => setOpenIntervals(false)}
            >
                <OptionList
                    options={INTERVAL_OPTIONS}
                    value={activeStatusIntervals}
                    onChange={(label) => {
                        setActiveStatusIntervals(label);
                        setOpenIntervals(false);
                    }}
                />
            </BottomSheet>
        </>
    );
}
