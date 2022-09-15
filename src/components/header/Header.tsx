import { NavigationBar } from "./NavigationBar";
import { Summary } from "./Summary";
import "../../common.css";

export function Header() {
    return <div className="p-lg wrapper-header">
        <Summary />
        <NavigationBar />

    </div>
}
