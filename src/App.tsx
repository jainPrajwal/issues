import React, { useEffect } from 'react';
import './App.css';
import axios, { AxiosResponse } from 'axios';
import { ISSUES_API } from './constants/issues.types';
import { Header } from './components';
import { Issues } from './components/issues/Issues';
import { useIssues } from './hooks/useIssues';


function App() {
 

  return (
    <div className="App">
      <Header />

      <Issues />
    </div>
  );
}

export default App;
