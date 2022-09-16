import axios, { AxiosResponse } from "axios";
import { useEffect, useRef, useState } from "react";
import { ISSUES_API, LIMIT, TOTAL_PAGES } from "../constants/issues.types";
import { useIssues } from "./useIssues";

function useInfiniteScroll() {
    const [pageNumber, setPageNumber] = useState(1);
    const [lastElement, setLastElement] = useState<HTMLDivElement | null>(null);
    const { issuesState, issuesDispatch } = useIssues();

    const startIndex = (pageNumber - 1) * LIMIT;
    const endIndex = pageNumber * LIMIT;

    /**
     * @params entries is the array of intersecting objects
     * 
     */
    const observer = useRef(new IntersectionObserver((entries) => {
        const first = entries[0];


        if (first.isIntersecting) {
            setPageNumber(prevState => prevState + 1)
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
                            type: `SET_ISSUES_LIST`,
                            payload: {
                                issues: issuesState.issuesList.concat(response.data.slice(startIndex, endIndex))
                            }
                        })
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


    return { startIndex, endIndex, pageNumber, lastElement, setLastElement }

}

export { useInfiniteScroll }