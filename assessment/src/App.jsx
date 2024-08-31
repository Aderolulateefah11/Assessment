import { useState } from 'react'
import Navscreen from "./Components/Navscreen"
import LogoTicker from './Components/LogoTicker'
import VisualImage from './Components/Streamlined'
import Launch from './Components/Launch'
import Track from './Components/Track'
import Testimonials from './Components/Testimonial'
import Footer from './Components/Footer'
import FrontPage from './Components/FrontPage'

function App() {
  

  return <div className="App">
    <div>
    <Navscreen />
  <FrontPage/>
    <LogoTicker />
    <Launch />
    <VisualImage />
    <Track />
    <Testimonials/>
    <Footer/>
    </div>
    
    </div>
  
}

export default App


