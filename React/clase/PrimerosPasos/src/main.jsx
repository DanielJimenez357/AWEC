import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Component1 from '../components/Component1.jsx'
import Component2 from '../components/Component2.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Component1/>
    <Component2/>
  </StrictMode>,
)
