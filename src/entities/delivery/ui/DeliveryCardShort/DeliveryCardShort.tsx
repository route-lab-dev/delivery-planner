import { DndIcon } from "@/shared/ui";
import type { Delivery } from "../../model/types";
import styles from "./DeliveryCardShort.module.css";
import { DeliveryTags } from "../DeliveryTags/DeliveryTags";
import type { ReactNode } from "react";

type Props = { delivery: Delivery; actions?: ReactNode };

export function DeliveryCardShort({ delivery, actions }: Props) {
    const fullName = `${delivery.lastName} ${delivery.firstName} ${delivery.middleName}`;

    return (
        <div>
            <article className={styles.card}>
                <header className={styles.header}>
                    <DeliveryTags urgency={delivery.urgency} />
                    <DndIcon />
                </header>

                <h2 className={styles.name}>{fullName}</h2>

                <div className={styles.meta}>
                    <div className={styles.cardRow}>
                        <svg className={styles.icon} viewBox="0 0 20 20" aria-hidden="true">
                            <circle cx="10" cy="10" r="10" fill="currentColor" />
                            <path
                                className={styles.clockHands}
                                d="M10 5v6l2.8 2.8"
                                fill="none"
                                strokeWidth="2"
                            />
                        </svg>

                        <span className={styles.time}>
                            {delivery.slotFrom}–{delivery.slotTo}
                        </span>
                    </div>

                    <div className={styles.cardRow}>
                        <svg
                            className={styles.icon}
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                        >
                            <path
                                d="M17.55 2.73 2.65 9.3 9 11.3l1.67 6.07z"
                                fill="currentColor"
                                stroke="currentColor"
                                strokeWidth="1.6"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <div>
                            <span className={styles.address}>{delivery.address}</span>
                            <span className={styles.metro}>метро {delivery.metro}</span>
                        </div>
                    </div>
                </div>

                <div className={styles.actions}>{actions}</div>
            </article>
        </div>
    );
}
