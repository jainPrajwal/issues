import { ChildrenProps } from "../constants/issues.types"

export function Flex({ children, alignItems = ``, justifyContent = `` }: {
    children: ChildrenProps,
    alignItems?: string,
    justifyContent?: string
}) {
    return <div className={`ai-${alignItems} jc-${justifyContent}`}>
        {children}
    </div>
}