import { Check } from "lucide-react";
import styles from "./OptionList.module.css";

type Option = {
    label: string; // статус или сортировка
    count?: number; // количество активных статусов
};

type Props = {
    options: Option[];
    value: string; // только у один выбранный статус
    onChange: (label: string) => void;
};

export function OptionList({ options, value, onChange }: Props) {
    return (
        <ul className={styles.list}>
            {options.map(({ label, count }) => (
                <li key={label}>
                    <button className={styles.option} type="button" onClick={() => onChange(label)}>
                        <span>
                            {label}
                            {count !== undefined && <span className={styles.count}>{count}</span>}
                        </span>
                        {label === value && <Check className={styles.check} aria-hidden="true" />}
                        {/* галочка только у выбранного статуса */}
                    </button>
                </li>
            ))}
        </ul>
    );
}
