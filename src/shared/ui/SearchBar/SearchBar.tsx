import { SearchIcon } from "../icons/SearchIcon";
import styles from "./SearchBar.module.css";

type Props = {
    onChange?: (value: string) => void;
    placeholder: string;
    label: string;
};

export function SearchBar({ onChange, placeholder, label }: Props) {
    return (
        <label className={styles.label}>
            <SearchIcon />
            <input
                className={styles.input}
                type="text"
                aria-label={label}
                onChange={(e) => onChange?.(e.target.value)}
                placeholder={placeholder}
            />
        </label>
    );
}
