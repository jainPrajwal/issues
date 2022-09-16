
import { useMemo } from "react";
import { useIssues } from "../../hooks/useIssues";
import { default as styles } from "./IssuesHeader.module.css";
function IssuesHeader() {
    const { issuesState } = useIssues();

    const openIssues = useMemo(() => {
        return issuesState.issuesList.reduce((acc, current) => acc = current.state === `open` ? acc + 1 : acc, 0)
    }, [issuesState]);



    const { issuesHeader } = styles;
    return <div className={`d-flex ai-center text-small p-md ${issuesHeader}`}>
        <div className="d-flex ai-center issues-stats gap-20">
            <a className="issues-open d-flex ai-center color-fg-default" href="/">
                <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" className="octicon octicon-issue-opened">
                    <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path><path fillRule="evenodd" d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"></path>
                </svg>
                <span className="ml-sm">{openIssues} Open</span>
            </a>
            <a
                className="issues-closed d-flex ai-center color-fg-default" href="/">
                <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" className="octicon octicon-check">
                    <path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
                </svg>
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