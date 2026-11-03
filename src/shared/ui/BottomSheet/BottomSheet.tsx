import type { ReactNode } from "react";
import { useEffect } from "react";
import { X } from "lucide-react";

import styles from "./BottomSheet.module.css";

type Props = {
    open: boolean;
    title: string;
    children: ReactNode; // шторка — только оболочка: внутри список, форма, что угодно
    onClose: () => void;
};

export function BottomSheet({ open, title, children, onClose }: Props) {
    // закрытие при нажатии на Escape
    useEffect(() => {
        if (!open) return;
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                // ловим только Escape
                onClose();
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [open, onClose]);

    useEffect(() => {
        if (!open) return;
        // Запоминаем предыдущее значение
        const previousOverflow = document.body.style.overflow;

        // Запрещаем прокрутку страницы
        document.body.style.overflow = "hidden";

        return () => {
            // Восстанавливаем предыдущее значение
            document.body.style.overflow = previousOverflow;
        };
    }, [open]);

    return (
        <>
            <div // затемнение
                className={`${styles.overlay} ${open ? styles.overlayOpen : ""}`} // регулируем видимость затемнения только классами
                onClick={onClose}
            />

            <div className={`${styles.panel} ${open ? styles.panelOpen : ""}`}>
                {/* панель с плавным открытием */}
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
                {children}
            </div>
        </>
    );
}
