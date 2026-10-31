import { ActionButton } from "@/shared/ui";
type Props = { onClick?: () => void };
export function DeliveryMissCall({ onClick }: Props) {
    return (
        <ActionButton variant="outline" onClick={onClick}>
            недозвон
        </ActionButton>
    );
}
