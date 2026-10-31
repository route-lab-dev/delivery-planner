import type { Delivery } from "./types";

// если есть ФИО, то возвращаем ФИО, иначе возвращаем телефон
export const titleSwitch = (delivery: Delivery) => {
    if (delivery.lastName && delivery.firstName && delivery.middleName) {
        return `${delivery.lastName} ${delivery.firstName} ${delivery.middleName}`;
    }

    return `+7(9**)***${delivery.phone.slice(-4, -2)}-${delivery.phone.slice(-2)}`;
};
