import { X, Check } from "lucide-react";

import styles from "./BottomSheet.module.css";

type Props = {
    open: boolean;
    active: string;
    title: string;
    children: string[];
    onClose: () => void;
    onChange: (child: string) => void;
};

export function BottomSheet({ open, active, title, children, onClose, onChange }: Props) {
    // Затемнение и панель — соседи, а не родитель и ребёнок. Клик всплывает только к родителям,
    // поэтому клик по панели не дойдёт до затемнения и не закроет шторку.
    //
    // Шторка всегда в DOM, open только меняет класс. С {open && …} анимации не было бы:
    // при закрытии элемент удалился бы сразу, а при открытии появился бы уже на конечном месте.
    return (
        <>
            <div
                className={`${styles.overlay} ${open ? styles.overlayOpen : ""}`}
                onClick={onClose}
            />

            <div className={`${styles.panel} ${open ? styles.panelOpen : ""}`}>
                <div className={styles.handle} /> // что это?

                <div className={styles.header}>
                    <p className={styles.title}>{title}</p>

                    <button
                        type="button"
                        className={styles.close}
                        aria-label="Закрыть"
                        onClick={onClose}
                    >
                        <X className={styles.closeIcon} aria-hidden="true" />
                    </button>
                </div>

                <ul className={styles.ul}>
                    {children.map((child) => (
                        <li key={child}>
                            <button
                                className={styles.button}
                                type="button"
                                onClick={() => {
                                    onChange(child);
                                    onClose();
                                }}
                            >
                                <span>{child}</span>

                                {child === active && (
                                    <Check className={styles.check} aria-hidden="true" />
                                )}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
