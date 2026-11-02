import type { ReactNode } from "react";
import { X } from "lucide-react";

import styles from "./BottomSheet.module.css";

type Props = {
    open: boolean;
    title: string;
    children: ReactNode; // шторка — только оболочка: внутри список, форма, что угодно
    onClose: () => void;
};

export function BottomSheet({ open, title, children, onClose }: Props) {
    return (
        <>
            <div // затемнение
                className={`${styles.overlay} ${open ? styles.overlayOpen : ""}`} // регулируем видимость затемнения только классами
                onClick={onClose}
            />

            <div className={`${styles.panel} ${open ? styles.panelOpen : ""}`}> {/* панель с плавным открытием */}
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
