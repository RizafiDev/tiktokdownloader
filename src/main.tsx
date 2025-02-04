import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'remixicon/fonts/remixicon.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar/>
    <Header/>
    <About/>
  </StrictMode>,
)
