import { NavigationBar } from "./NavigationBar";
import { Summary } from "./Summary";
import "../../common.css";
import { default as styles } from "./Header.module.css";

export function Header() {
    const { header } = styles;
    return <div className={`pt-lg px-md ${header}`}>
        <Summary />
        <NavigationBar />

    </div>
}
