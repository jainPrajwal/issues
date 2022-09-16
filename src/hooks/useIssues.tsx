import { useContext } from "react"
import { IssuesContext } from "../contexts/issues-context"

export const useIssues = () => {
    
    return useContext(IssuesContext);
}