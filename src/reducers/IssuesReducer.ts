import { ACTION, Issue, IssuesInitialState } from "../constants/issues.types";

function issuesReducer(state: IssuesInitialState, { type, payload }: ACTION) {
  switch (type) {
    case `SET_ISSUES_LIST`:
      if (`issues` in payload) {
        const allIssues = [...state.issuesList, ...payload.issues].map(
          (issue) => [issue.id, issue] as [number, Issue]
        );

        const uniqueIssues = new Map(allIssues);

        return {
          ...state,
          issuesList: [...uniqueIssues.values()],
        };
      }
      return state;

    case `SET_ERROR_MESSAGE`:
      if (`errorMessage` in payload) {
        return {
          ...state,
          errorMessage: payload.errorMessage,
        };
      }
      return state;

    case `SET_LOADING_STATUS`:
      if (`loadingStatus` in payload) {
        return {
          ...state,
          loading: payload.loadingStatus,
        };
      }

      return state;

    default:
      return state;
  }
}
export { issuesReducer };
