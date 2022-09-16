import { ChildrenProps } from "../../constants/issues.types"

function IssuesWrapper({ children }: { children: ChildrenProps }) {
    return <>{children}</>
}

export { IssuesWrapper }