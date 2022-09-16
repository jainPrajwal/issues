import { useIssues } from "../../hooks/useIssues"
import { IssuesHeader } from "./IssuesHeader"
import { IssuesWrapper } from "./IssuesWrapper"

function Issues() {
    const { issuesState } = useIssues();
    return <>
        <IssuesHeader />
        <IssuesWrapper>
            {
                issuesState.issuesList.map(issue => <p key={issue.id}>{issue.id}</p>)
            }
        </IssuesWrapper>
    </>
}

export { Issues }