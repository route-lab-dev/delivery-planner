import type { ReactNode } from "react";
import type { Delivery } from "../../model/types";
import styles from "./DeliveryCardFull.module.css";
import { titleSwitch } from "../../model/titleSwitch";
import { DeliveryTags } from "../DeliveryTags/DeliveryTags";
import { Clock, Navigation } from "lucide-react";
import { ActionButton } from "@/shared/ui";
type Props = { delivery: Delivery; actions: ReactNode; missCall: number };

export function DeliveryCardFull({ delivery, actions, missCall }: Props) {
    const fullName = titleSwitch(delivery);
    return (
        <article className={styles.card}>
            <header>
                <DeliveryTags urgency={delivery.urgency} />
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

            <div>
                <h3 className={styles.calls}>Вызовы</h3>
                {missCall > 0 ? <p className={styles.missCall}>Недозвонов: {missCall}</p> : null}
            </div>

            <ActionButton variant="block">Согласовал встречу</ActionButton>
            <ActionButton variant="block">Перенести встречу</ActionButton>
            <ActionButton variant="block">Отменить встречу</ActionButton>
        </article>
    );
}
