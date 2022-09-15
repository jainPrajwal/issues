import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { Issue, ISSUES_API, LoadingStatus } from './constants/issues.types';
import { Header } from './components';


function App() {
  const [issuesData, setIssuesData] = useState<{
    issuesList: Array<Issue>,
    status: LoadingStatus
  }>({
    issuesList: [],
    status: `idle`
  });
  useEffect(() => {
    (async () => {
      try {
        setIssuesData(prevState => {
          return {
            ...prevState,
            status: `loading`
          }
        })
        const response = await axios.get(`${ISSUES_API}`);
        if (response.status === 200) {
          setIssuesData(prevState => {
            return {
              ...prevState,
              issuesList: response.data as Array<Issue>,
              status: `success`
            }
          })
        } else {
          setIssuesData(prevState => {
            return {
              ...prevState,

              status: `error`
            }
          })
        }
      } catch (error) {
        console.error(`some error occured while fetching issues `, error);
        setIssuesData(prevState => {
          return {
            ...prevState,

            status: `error`
          }
        })
      }

    })();
  }, [])

  return (
    <div className="App">
      <Header />

      <main>

      </main>
    </div>
  );
}

export default App;
