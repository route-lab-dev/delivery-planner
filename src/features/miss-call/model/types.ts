import type { Delivery } from "@/entities/delivery";

export interface MissCall {
    id: string;
    deliveryUuid: Delivery["uuid"];
    calledAt: string;
}
