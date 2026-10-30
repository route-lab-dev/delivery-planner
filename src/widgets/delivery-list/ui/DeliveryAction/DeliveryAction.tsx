import { DeliveryButtonCall } from "@/features/call-client";
import { DeliveryButtonSms } from "@/features/send-sms";
import { PrintDocumentsButton } from "@/features/print-documents";
import type { Delivery } from "@/entities/delivery";
import { DeliveryButton911 } from "@/features/call-911";

type Props = { delivery: Delivery };
export function DeliveryAction({ delivery }: Props) {
    return (
        <>
            <DeliveryButtonCall />
            <DeliveryButtonSms />
            <DeliveryButton911 />
            {delivery.documentId && <PrintDocumentsButton documentId={delivery.documentId} />}
        </>
    );
}
