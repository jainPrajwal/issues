
import { useMemo } from "react";
import { useIssues } from "../../hooks/useIssues";
import { ClosedIssuesSVG, OpenIssuesSVG } from "../svg/all-svg";
import { default as styles } from "./IssuesHeader.module.css";
function IssuesHeader() {
    const { issuesState } = useIssues();

    const openIssues = useMemo(() => {
        return issuesState.issuesList.reduce((acc, current) => acc = current.state === `open` ? acc + 1 : acc, 0)
    }, [issuesState]);



    const { issuesHeader } = styles;
    return <div className={`d-flex ai-center text-small p-md ${issuesHeader} f-wrap gap-20`}>
        <div className="d-flex ai-center issues-stats gap-20">
            <a className="issues-open d-flex ai-center color-fg-default" href="/">
                <OpenIssuesSVG />
                <span className="ml-sm">{openIssues} Open</span>
            </a>
            <a className="issues-closed d-flex ai-center color-fg-default" href="/">
                <ClosedIssuesSVG />
                <span className="ml-sm"><span>10,921 </span>
                    <span>Closed</span>
                </span>


            </a>
        </div>
        <summary className="issues-filters ml-auto">
            <button className="btn btn-link text-small"><span>Author</span><span
                className="dropdown-caret ml-sm"
            ></span></button>
            <button className="btn btn-link text-small"><span>Label</span><span
                className="dropdown-caret ml-sm"
            ></span></button>
            <button className="btn btn-link text-small"><span>Projects</span><span
                className="dropdown-caret ml-sm"
            ></span></button>
            <button className="btn btn-link text-small"><span>Milestones</span><span
                className="dropdown-caret ml-sm"
            ></span></button>
            <button className="btn btn-link text-small"><span>Assignee</span><span
                className="dropdown-caret ml-sm"
            ></span></button>
            <button className="btn btn-link text-small"><span>Sort</span><span
                className="dropdown-caret ml-sm"
            ></span></button>
        </summary>
    </div>
}

export { IssuesHeader }