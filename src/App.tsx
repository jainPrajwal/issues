import React from 'react';
import './App.css';


import { Header } from './components';
import { Issues } from './components/issues/Issues';

import { Route, Routes } from 'react-router';
import { CodePage } from './pages/CodePage';
import { PullRequestsPage } from './pages/PullRequestsPage';
import { ActionsPage } from './pages/ActionsPage';
import { IssuesPage } from './pages/IssuesPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { WikiPage } from './pages/WikiPage';
import { SecurityPage } from './pages/SecurityPage';
import { InsightsPage } from './pages/InsightsPage';


function App() {

  return (
    <div className="App">
      <Header />
    

      <Routes>
        <Route path='/code' element={<CodePage />} />
        
        <Route path='/pull-requests' element={<PullRequestsPage />} />
        <Route path='/actions' element={<ActionsPage />} />
        <Route path='/issues' element={<IssuesPage />} />
        <Route path='/projects' element={<ProjectsPage />} />
        <Route path='/wiki' element={<WikiPage />} />
        <Route path='/security' element={<SecurityPage />} />
        <Route path='/insights' element={<InsightsPage />} />
      </Routes>
    </div>
  );
}

export default App;
