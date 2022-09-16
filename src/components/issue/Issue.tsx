
import { useState } from "react";
import { Issue as IssueType } from "../../constants/issues.types";
import { default as styles } from "./Issue.module.css";

const backgroundColorLabels = new Map([
    ["Status: Unconfirmed", ``],
    ["CLA Signed", "var( --color-scale-yellow-1)"],
    ["Type: Bug", "var(--color-ansi-red-bright)"]


])


function Issue({ issue }: { issue: IssueType }) {
    const [showPopOver, setShowPopOver] = useState(false);
    const [showDetailsPopOver, setShowDetailsPopOver] = useState(false);


    const { issueTitleLink, issueLabel, issueDetailsPopover, issueOwnerDetailsPopover, followButton, IssueBoxWrapper, issueBody } = styles;


    return <div className={`d-flex f-direction-col jc-center gap-10 ${IssueBoxWrapper}`}>
        <div className="d-flex ai-center gap-10 pos-rel f-wrap">

            <svg

                className={`octicon octicon-issue-opened ${issue.state}`} viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path><path fillRule="evenodd" d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"></path></svg>

            <span
                onMouseEnter={(e) => {
                    setShowPopOver(true);
                }}

                onMouseLeave={() => {
                    setShowPopOver(false);
                }}
            >
                <a href={issue.html_url}


                    className={`text-bold ${issueTitleLink} styled-normal-link`}
                >{issue.title}
                </a>

                <div
                    onMouseEnter={(e) => {

                        setShowPopOver(true);
                    }}
                    onMouseLeave={(e) => {

                        setShowPopOver(false);
                    }}
                    className={`${issueDetailsPopover} ${showPopOver ? `d-flex` : `d-none`}`}>
                    <div>
                        <a href="/"
                            className="styled-normal-link"

                        > <span className="text-bold">{issue.title}</span></a>

                        <p className={`my-md ${issueBody}`}>{issue.body}</p>
                    </div>
                </div>
            </span>

            {
                issue.labels.map(label => <span
                    key={label.id}
                    style={{
                        backgroundColor: backgroundColorLabels.get(label.name),
                        color: label.name === `Type: Bug` ? `#fff` : ``
                    }}
                    className={` ${issueLabel}`}>{label.name}</span>)
            }

        </div>
        <div
        >
            <div className="text-small ">#{issue.number} opened
                <span> {new Date(issue.created_at).getHours()} </span>
                hours ago by
                <span
                    className="pos-rel"
                    onMouseOver={(e) => {
                        setShowDetailsPopOver(true);
                    }}

                    onMouseLeave={() => {
                        setShowDetailsPopOver(false);
                    }}

                >


                    <a

                        href="/"
                        className="styled-normal-link ml-sm"
                    >{issue.user.login}

                    </a>
                    <div
                        onMouseEnter={(e) => {

                            setShowDetailsPopOver(true);
                        }}
                        onMouseLeave={(e) => {

                            setShowDetailsPopOver(false);
                        }}
                        className={`${issueOwnerDetailsPopover} ${showDetailsPopOver ? `d-flex` : `d-none`}`}

                    >
                        <div className="d-flex">
                            <div
                                className="wrapper-avatar"
                            >
                                <img src={`${issue.user.avatar_url}`} alt="user"
                                    className="img-rounded"
                                />

                            </div>
                            <div className="ml-auto">
                                <button className={`btn btn-outline text-small ${followButton}`} >Follow</button>
                            </div>
                        </div>

                        <div>

                            <a href="/"
                                className="styled-normal-link"
                            >{issue.user.login}</a>

                        </div>
                    </div>
                </span>
            </div>

        </div>
    </div>
}

export { Issue }