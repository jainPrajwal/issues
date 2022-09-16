import React, { useEffect } from 'react';
import './App.css';
import axios from 'axios';
import {  ISSUES_API } from './constants/issues.types';
import { Header } from './components';
import { Issues } from './components/issues/Issues';
import { useIssues } from './hooks/useIssues';


function App() {
  const {  issuesDispatch } = useIssues();
  useEffect(() => {
    (async () => {
      try {
        issuesDispatch({
          type: 'SET_LOADING_STATUS',
          payload: {
            loadingStatus: `loading`
          }
        })
        const response = await axios.get(`${ISSUES_API}`);
        if (response.status === 200) {
         
          issuesDispatch({
            type: `SET_ISSUES_LIST`,
            payload: {
              issues: response.data
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
  }, [issuesDispatch])

  return (
    <div className="App">
      <Header />

      <Issues />
    </div>
  );
}

export default App;
