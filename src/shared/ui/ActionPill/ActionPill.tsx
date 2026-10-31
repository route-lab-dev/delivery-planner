import type { ReactNode } from "react";
import styles from "./ActionPill.module.css";
import { ArrowIcon } from "../icons/ArrowIcon";

type Props = {
    text?: string;
    count?: number;
    onClick?: () => void;
    icon?: ReactNode;
    selected?: boolean; // тёмная таблетка, когда фильтр выбран.
    open?: boolean; // стрелка смотрит вверх, пока открыта шторка.
    label?: string; // у сортировки текста нет, поэтому ей нужен aria-label.
};

export function ActionPill({ text, count, onClick, icon, selected, open, label }: Props) {
    return (
        <button
            type="button"
            aria-label={label}
            onClick={onClick}
            className={`${styles.button} ${selected ? styles.dark : ""}`}
        >
            {icon}
            <span>
                {text}
                {count !== undefined && `: ${count}`}
            </span>
            <ArrowIcon className={`${styles.arrow} ${open ? styles.up : ""}`} />
        </button>
    );
}
