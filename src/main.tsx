import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { UserName } from '@/context'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <UserName.UserNameProvider>
      <App />
    </UserName.UserNameProvider>
  </React.StrictMode>,
)
