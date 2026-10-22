import ActionButton from "./ActionButton";

type Props = { onClick: () => void };
export default function DeliveryButtonNote({ onClick }: Props) {
    return (
        <ActionButton variant="light" onClick={onClick}>
            Заметка
        </ActionButton>
    );
}
