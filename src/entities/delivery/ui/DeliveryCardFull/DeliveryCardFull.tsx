import type { ReactNode } from "react";
import type { Delivery } from "../../model/types";
import style from "./DeliveryCardFull.module.css";
type Props = { delivery: Delivery; actions: ReactNode; missCall: number };

export function DeliveryCardFull({ delivery, actions, missCall }: Props) {
    const fullName = `${delivery.lastName} ${delivery.firstName} ${delivery.middleName}`;

    return (
        <article className={style.card}>
            <h2 className={style.title}>{fullName}</h2>
            <p className={style.time}>
                {delivery.slotFrom}–{delivery.slotTo}
            </p>
            <p className={style.address}>{delivery.address}</p>
            <p className={style.metro}>м. {delivery.metro}</p>

            {actions}

            <h3 className={style.calls}>Вызовы</h3>
            {missCall === 0 ? null : <p className={style.missCall}>Недозвонов: {missCall}</p>}
        </article>
    );
}

// SMS, Позвонить - пока что мок
