import type { ReactNode } from "react";
import type { Delivery } from "../types";

type Props = { delivery: Delivery; actions: ReactNode };

export default function DeliveryCardFull({ delivery, actions }: Props) {
    const fullName = `${delivery.lastName} ${delivery.firstName} ${delivery.middleName}`;

    return (
        <article>
            <h2>{fullName}</h2>
            <p>
                {delivery.slotFrom}–{delivery.slotTo}
            </p>
            <p>{delivery.address}</p>
            <p>м. {delivery.metro}</p>

            {actions}

            <h3>Вызовы</h3>
            {/* TODO: мини-карточка истории вызовов */}
        </article>
    );
}

// SMS, Позвонить - пока что мок
