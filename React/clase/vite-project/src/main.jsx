import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Myapp from './Myapp.jsx'
import {Button} from './components/Button.jsx'
import Cabecera from './Cabecera.jsx'

createRoot(document.getElementById('root')).render(
  <>
  <Button/>
    <Cabecera>Hola muy buenas</Cabecera>
  </>
  ,
)
