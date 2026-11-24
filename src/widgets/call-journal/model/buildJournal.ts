import type { Delivery } from "@/entities/delivery";
import type { MissCall } from "@/features/miss-call";

export type JournalRow = {
    id: MissCall["id"];
    calledAt: MissCall["calledAt"];
    delivery: Delivery;
};
export function buildJournal(items: MissCall[], deliveries: Delivery[]): JournalRow[] {
    const byUuid = new Map(deliveries.map((delivery) => [delivery.uuid, delivery]));

    return items
        .flatMap(({ id, deliveryUuid, calledAt }) => {
            const delivery = byUuid.get(deliveryUuid);
            return delivery ? [{ id, delivery, calledAt }] : [];
        })
        .sort((a, b) => b.calledAt.localeCompare(a.calledAt));
}
