import { useAppDispatch } from "@/app/hooks";
import type { Delivery } from "@/entities/delivery";
import { ActionButton } from "@/shared/ui";
import { missCallAdded } from "../model/missCallSlice";
type Props = { deliveryUuid: Delivery["uuid"] };
export function DeliveryMissCall({ deliveryUuid }: Props) {
    const dispatch = useAppDispatch();
    return (
        <ActionButton variant="outline" onClick={() => dispatch(missCallAdded(deliveryUuid))}>
            Недозвон
        </ActionButton>
    );
}
