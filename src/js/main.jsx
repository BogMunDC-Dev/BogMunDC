import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './navbar.jsx'
import Footer from './footer.jsx'
import UnModels from './un_models.jsx'
import '../Bootstrap/css/bootstrap.min.css'
import '../Bootstrap/js/bootstrap.bundle.min.js'
import '../css/style.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <UnModels>
      
    </UnModels>
    <Footer />
  </StrictMode>,
)
