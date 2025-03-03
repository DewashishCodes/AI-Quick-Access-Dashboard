import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'

import AIToolsDashboard from './App2'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AIToolsDashboard />
  </StrictMode>,
)
