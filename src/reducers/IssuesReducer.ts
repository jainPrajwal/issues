import { ACTION, IssuesInitialState } from "../constants/issues.types";

function issuesReducer(state: IssuesInitialState, { type, payload }: ACTION) {
  switch (type) {
    case `SET_ISSUES_LIST`:
      if (`issues` in payload) {
        return {
          ...state,
          issuesList: payload.issues,
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
