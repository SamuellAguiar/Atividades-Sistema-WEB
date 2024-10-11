import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRoutes from './routes.tsx'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>,
)
