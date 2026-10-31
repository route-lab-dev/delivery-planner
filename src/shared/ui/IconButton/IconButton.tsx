import type { ReactNode } from "react";
import styles from "./IconButton.module.css";

type Props = {
    icon: ReactNode;
    label: string;
    onClick?: () => void;
    count?: number;
};

export function IconButton({ icon, label, onClick, count = 0 }: Props) {
    return (
        <button
            type="button"
            aria-label={label}
            className={styles.button}
            onClick={() => onClick?.()}
        >
            {icon}
            {count > 0 && <span className={styles.count}>{count}</span>}
        </button>
    );
}
