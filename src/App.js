import './App.css';

import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default function App (){

  const pagesize = 11
  const apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setprogress] = useState(0)

    return (
      <div>
        <Router>
          <LoadingBar
            color='green'
            progress={progress}
            height={1.5}
          />
          <NavBar />

          <Routes>
            <Route path="/" element={<News setProgress={setprogress} apiKey={apiKey} pagesize={pagesize}
              key="general" country="in" category="general" />} />

            <Route path="/business" element={<News setProgress={setprogress} apiKey={apiKey} pagesize={pagesize}
              key="business" country="in" category="business" />} />

            <Route path="/entertainment" element={<News setProgress={setprogress} apiKey={apiKey} pagesize={pagesize}
              key="entertainment" country="in" category="entertainment" />} />

            <Route path="/health" element={<News setProgress={setprogress} apiKey={apiKey} pagesize={pagesize}
              key="health" country="in" category="health" />} />

            <Route path="/science" element={<News setProgress={setprogress} apiKey={apiKey} pagesize={pagesize}
              key="science" country="in" category="science" />} />

            <Route path="/sports" element={<News setProgress={setprogress} apiKey={apiKey} pagesize={pagesize}
              key="sports" country="in" category="sports" />} />

            <Route path="/technology" element={<News setProgress={setprogress} apiKey={apiKey} pagesize={pagesize}
              key="technology" country="in" category="technology" />} />
          </Routes>
        </Router>
      </div>
    )
  
}