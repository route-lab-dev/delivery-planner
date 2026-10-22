import DeliveryButtonCall from "./DeliveryButtonCall";
import DeliveryButtonSms from "./DeliveryButtonSms";
import PrintDocumentsButton from "./PrintDocumentsButton";
import type { Delivery } from "../types";

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
