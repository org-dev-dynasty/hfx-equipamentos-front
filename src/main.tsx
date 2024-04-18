import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AppRoutes from './app/pages/client/routes/index.tsx';
import { UserContextProvider } from './app/context/user_context.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserContextProvider>
      <AppRoutes/>
    </UserContextProvider>
  </React.StrictMode>
)
