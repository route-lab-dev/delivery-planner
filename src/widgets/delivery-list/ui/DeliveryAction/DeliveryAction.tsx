import { DeliveryButtonCall } from "@/features/call-client";
import { DeliveryButtonSms } from "@/features/send-sms";
import { PrintDocumentsButton } from "@/features/print-documents";
import type { Delivery } from "@/entities/delivery";
import { DeliveryMissCall } from "@/features/miss-call";

type Props = { delivery: Delivery; onClick?: () => void };
export function DeliveryAction({ delivery, onClick }: Props) {
    return (
        <>
            <DeliveryButtonCall />
            <DeliveryButtonSms />
            <DeliveryMissCall onClick={onClick} />
            {delivery.documentId && <PrintDocumentsButton documentId={delivery.documentId} />}
        </>
    );
}
