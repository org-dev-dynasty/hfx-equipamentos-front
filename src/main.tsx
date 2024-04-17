import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AppRoutes from './app/pages/client/routes/index.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppRoutes/>
  </React.StrictMode>
)
