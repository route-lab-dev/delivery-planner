import { ChatIcon, IconButton, MapIcon, MenuIcon, PhoneIcon } from "@/shared/ui";
import styles from "./NavBar.module.css";
import { useNavigate } from "react-router-dom";

export function NavBar() {
    const navigate = useNavigate();
    return (
        <header className={styles.header}>
            <IconButton
                icon={<MenuIcon />}
                label="Основное меню"
                onClick={() => navigate("/menu")}
            />
            <div className={styles.buttons}>
                <IconButton
                    icon={<MapIcon />}
                    label="Карта встреч"
                    onClick={() => navigate("/map")}
                />
                <IconButton
                    icon={<PhoneIcon />}
                    label="Журнал звонков"
                    onClick={() => navigate("/calls")}
                />
                <IconButton icon={<ChatIcon />} label="Журнал сообщений" count={1} />
            </div>
        </header>
    );
}
