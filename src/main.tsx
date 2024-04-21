import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AppRoutes from './app/pages/client/routes/index.tsx';
import { UserContextProvider } from './app/context/user_context.tsx';
import { ProductContextProvider } from './app/context/product_context.tsx';
import { WhatsappLogo } from '@phosphor-icons/react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ProductContextProvider>
      <UserContextProvider>
        <AppRoutes/>
        <a href="https://api.whatsapp.com/send?phone=5511987175329&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20o%20nosso%20servi%C3%A7o!">
          <WhatsappLogo size={58} className='fixed bottom-6 right-6 bg-green-500 text-white p-2 rounded-full cursor-pointer'/>
        </a>
      </UserContextProvider>
    </ProductContextProvider>
  </React.StrictMode>
)
