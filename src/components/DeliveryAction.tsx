import { DeliveryButtonCall } from "@/features/call-client";
import { DeliveryButtonSms } from "@/features/send-sms";
import { PrintDocumentsButton } from "@/features/print-documents";
import type { Delivery } from "@/entities/delivery";

type Props = { delivery: Delivery };
export default function DeliveryAction({ delivery }: Props) {
    return (
        <>
            <DeliveryButtonCall />
            <DeliveryButtonSms />
            {delivery.documentId && <PrintDocumentsButton documentId={delivery.documentId} />}
        </>
    );
}
