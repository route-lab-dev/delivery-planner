import { Clock, Navigation } from "lucide-react";
import { DndIcon } from "@/shared/ui";
import type { Delivery } from "../../model/types";
import { titleSwitch } from "../../model/titleSwitch";
import styles from "./DeliveryCardShort.module.css";
import { DeliveryTags } from "../DeliveryTags/DeliveryTags";
import type { ReactNode } from "react";

type Props = { delivery: Delivery; actions?: ReactNode };

export function DeliveryCardShort({ delivery, actions }: Props) {
    const fullName = titleSwitch(delivery);

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
                        <Clock className={styles.icon} aria-hidden="true" />

                        <span className={styles.time}>
                            {delivery.slotFrom}–{delivery.slotTo}
                        </span>
                    </div>

                    <div className={styles.cardRow}>
                        <Navigation className={styles.icon} aria-hidden="true" />
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
