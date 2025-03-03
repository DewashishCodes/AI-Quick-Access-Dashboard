import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import AIToolsDashboard from './App2'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AIToolsDashboard />
  </StrictMode>,
)
