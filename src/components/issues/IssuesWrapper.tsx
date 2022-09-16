import { ChildrenProps } from "../../constants/issues.types"
import { default as styles } from "./IssuesWrapper.module.css";

function IssuesWrapper({ children }: { children: ChildrenProps }) {
    const { wrapperIssues } = styles;
    return <div
        className={`${wrapperIssues}`}
    >{children}</div>
}

export { IssuesWrapper }