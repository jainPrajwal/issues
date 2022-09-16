import { useIssues } from "../../hooks/useIssues"
import { IssuesHeader } from "./IssuesHeader"
import { IssuesWrapper } from "./IssuesWrapper"
import { default as styles } from "./Issues.module.css";
import { Issue } from "../issue/Issue";
import { useEffect, useRef, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { ISSUES_API } from "../../constants/issues.types";

const TOTAL_PAGES = 3;
const LIMIT = 10;
function Issues() {
    const { containerIssues, wrapperIssues } = styles;
    const { issuesState, issuesDispatch } = useIssues();

    const [pageNumber, setPageNumber] = useState(1);
    const [lastElement, setLastElement] = useState<HTMLDivElement | null>(null);

    const startIndex = (pageNumber - 1) * LIMIT;
    const endIndex = pageNumber * LIMIT;

    /**
     * @params entries is the array of intersecting objects
     * 
     */
    const observer = useRef(new IntersectionObserver((entries) => {
        const first = entries[0];
        console.log(`first element `, first);

        if (first.isIntersecting) {

        }
    }))



    useEffect(() => {
        if (pageNumber <= TOTAL_PAGES) {
            (async () => {
                try {
                    issuesDispatch({
                        type: 'SET_LOADING_STATUS',
                        payload: {
                            loadingStatus: `loading`
                        }
                    })
                    const response = await new Promise((resolve, reject) => {
                        setTimeout(() => {
                            resolve(axios.get(`${ISSUES_API}`))
                        }, 2000)
                    }) as AxiosResponse;

                    if (response.status === 200) {

                        issuesDispatch({
                            type: `SET_LOADING_STATUS`,
                            payload: {
                                loadingStatus: `success`
                            }
                        })
                    } else {
                        issuesDispatch({
                            type: `SET_LOADING_STATUS`,
                            payload: {
                                loadingStatus: `error`
                            }
                        })
                    }
                } catch (error) {
                    console.error(`some error occured while fetching issues `, error);
                    issuesDispatch({
                        type: `SET_ERROR_MESSAGE`,
                        payload: {
                            errorMessage: `somehting went wrong`
                        }
                    })
                    issuesDispatch({
                        type: `SET_LOADING_STATUS`,
                        payload: {
                            loadingStatus: `error`
                        }
                    })
                }

            })();
        }

    }, [issuesDispatch, pageNumber, startIndex, endIndex])

    useEffect(() => {
        const currentElement = lastElement;
        const currentObserver = observer.current;

        if (currentElement) {
            currentObserver.observe(currentElement);
        }


        return () => {
            if (currentElement) {
                currentObserver.unobserve(currentElement);
            }
        }

    }, [lastElement]);

    console.log(issuesState, `issuesState`)

    return <div className={` px-lg ${containerIssues}`}>
        <div className={`mt-lg ${wrapperIssues}`}>
            <IssuesHeader />
            <IssuesWrapper>
                {
                    issuesState.loading === `success` ? issuesState.issuesList.map((issue, index) => {

                        if (index === issuesState.issuesList.length - 1) {
                            if (pageNumber < TOTAL_PAGES) {
                                return <div
                                    ref={setLastElement}
                                ><button
                                    onClick={() => {
                                        setPageNumber(prevState => prevState + 1)
                                    }}
                                >Load More</button></div>
                            }
                            return <>You are all caught up!</>

                        }
                        return <Issue key={issue.id} issue={issue}
                        />


                    }) : <h1>Loading</h1>
                }
            </IssuesWrapper>
        </div>

    </div>
}

export { Issues }