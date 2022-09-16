import { useIssues } from "../../hooks/useIssues"
import { IssuesHeader } from "./IssuesHeader"
import { IssuesWrapper } from "./IssuesWrapper"
import { default as styles } from "./Issues.module.css";
import { Issue } from "../issue/Issue";
import { TOTAL_PAGES } from "../../constants/issues.types";
import { Loader } from "../Loader/Loader";
import { useInfiniteScroll } from "../../hooks/useInfiniteScroll";


function Issues() {
    const { containerIssues, wrapperIssues } = styles;
    const { issuesState } = useIssues();
    const { setLastElement, pageNumber } = useInfiniteScroll();

    return <div className={` px-lg ${containerIssues}`}>
        <div className={`mt-lg ${wrapperIssues}`}>
            <IssuesHeader />

            <IssuesWrapper>
                {
                    issuesState.issuesList.map((issue, index) => {

                        if (index === issuesState.issuesList.length - 1) {
                            if (pageNumber <= TOTAL_PAGES) {
                                return <div
                                    key={issue.id}
                                    ref={setLastElement}
                                ><Issue key={issue.id} issue={issue}
                                    />
                                </div>
                            }
                            return <div
                                key={issue.id}
                                className="text-center text-larger p-md">You are all caught up!</div>

                        }
                        return <Issue key={issue.id} issue={issue}
                        />


                    })
                }
                {issuesState.loading === `loading` && <div
                    className="d-flex jc-center p-lg"
                ><Loader /></div>}

            </IssuesWrapper>
        </div>

    </div>
}

export { Issues }