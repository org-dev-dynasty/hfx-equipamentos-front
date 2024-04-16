import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Home } from './app/pages/client/home/index.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
