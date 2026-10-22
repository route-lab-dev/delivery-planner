import { Tag } from "@/shared/ui";
import styles from "./DeliveryTags.module.css";

type Props = { urgency: boolean };

export function DeliveryTags({ urgency }: Props) {
    return <div className={styles.row}>{urgency && <Tag text="Срочная" tone="red" />}</div>;
}
