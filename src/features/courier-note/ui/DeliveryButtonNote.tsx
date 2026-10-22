import { ActionButton } from "@/shared/ui";

type Props = { onClick?: () => void };
export function DeliveryButtonNote({ onClick }: Props) {
    return (
        <ActionButton variant="light" onClick={onClick}>
            Заметка
        </ActionButton>
    );
}
