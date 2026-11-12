import { DeliveryButtonCall } from "@/features/call-client";
import { DeliveryButtonSms } from "@/features/send-sms";
import { PrintDocumentsButton } from "@/features/print-documents";
import type { Delivery } from "@/entities/delivery";
import { DeliveryMissCall } from "@/features/miss-call";

type Props = { delivery: Delivery };
export function DeliveryAction({ delivery }: Props) {
    return (
        <>
            <DeliveryButtonCall />
            <DeliveryButtonSms />
            <DeliveryMissCall deliveryUuid={delivery.uuid} />
            {delivery.documentId && <PrintDocumentsButton documentId={delivery.documentId} />}
        </>
    );
}
