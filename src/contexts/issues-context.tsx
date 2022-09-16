import { createContext, useReducer } from "react";
import { ACTION, ChildrenProps, IssuesInitialState } from "../constants/issues.types";
import { issuesReducer } from "../reducers/IssuesReducer";



const initialState: IssuesInitialState = {
    issuesList: [],
    loading: `idle`
}

const IssuesContext = createContext<{
    issuesState: IssuesInitialState,
    issuesDispatch: React.Dispatch<ACTION>
}>({

    issuesState: {
        issuesList: [],
        loading: `idle`
    },
    issuesDispatch: () => { }
});


const IssuesProvider = ({ children }: { children: ChildrenProps }) => {
    const [issuesState, issuesDispatch] = useReducer(issuesReducer, initialState);
    return <IssuesContext.Provider value={{ issuesState, issuesDispatch }}>{children}</IssuesContext.Provider>
}

export { IssuesContext, IssuesProvider }