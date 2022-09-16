import React from "react";

export const ISSUES_API = `https://api.github.com/repos/facebook/react/issues`;
export const SET_ISSUES_LIST = `SET_ISSUES_LIST`;
export const SET_LOADING_STATUS = `SET_LOADING_STATUS`;
export const SET_ERROR_MESSAGE = `SET_ERROR_MESSAGE`;

type User = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};

type Label = {
  id: number;
  node_id: string;
  url: string;
  name: string;
  color: string;
  default: boolean;
  description: string;
};

type Reactions = {
  url: string;
  total_count: number;
  "+1": number;
  "-1": number;
  laugh: number;
  hooray: number;
  confused: number;
  heart: number;
  rocket: number;
  eyes: number;
};

type Issue = {
  url: string;
  repository_url: string;
  labels_url: string;
  comments_url: string;
  events_url: string;
  html_url: string;
  id: number;
  node_id: string;
  number: number;
  title: string;
  user: User;
  labels: Array<Label>;
  state: string;
  locked: boolean;
  assignee: null;
  assignees: [];
  milestone: null;
  comments: number;
  created_at: string;
  updated_at: string;
  closed_at: null;
  author_association: string;
  active_lock_reason: null;
  body: string;
  reactions: Reactions;
  timeline_url: string;
  performed_via_github_app: null;
  state_reason: null;
};

type LoadingStatus = `idle` | `loading` | `success` | `error`;
type ChildrenProps = React.ReactNode;

type IssuesInitialState = {
  issuesList: Array<Issue>;
  loading: LoadingStatus;
  errorMessage?: string;
};

type ACTION =
  | {
      type: typeof SET_ISSUES_LIST;
      payload: {
        issues: Array<Issue>;
      };
    }
  | {
      type: typeof SET_LOADING_STATUS;
      payload: {
        loadingStatus: LoadingStatus;
      };
    }
  | {
      type: typeof SET_ERROR_MESSAGE;
      payload: {
        errorMessage: string;
      };
    };

export type {
  Issue,
  Label,
  Reactions,
  User,
  LoadingStatus,
  ChildrenProps,
  IssuesInitialState,
  ACTION,
};
