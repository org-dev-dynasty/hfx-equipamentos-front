import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Home } from './app/pages/client/home/index.tsx';
import { Products } from './app/pages/client/product/index.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
