import { ChatIcon, IconButton, MapIcon, MenuIcon, PhoneIcon } from "@/shared/ui";
import styles from "./NavBar.module.css";

export function NavBar() {
    return (
        <header className={styles.header}>
            <IconButton icon={<MenuIcon />} label="Основное меню" />
            <div className={styles.buttons}>
                <IconButton icon={<MapIcon />} label="Карта встреч" />
                <IconButton icon={<PhoneIcon />} label="Журнал звонков" />
                <IconButton icon={<ChatIcon />} label="Журнал сообщений" count={1} />
            </div>
        </header>
    );
}
