import './App.css'
import { Route, Routes } from 'react-router-dom'
import WalkIn from './routes/WalkIn'
import Home from './routes/Home'
import About from './routes/About'
import Services from './routes/Services'
import Contact from './routes/Contact'
import MacBookPower from './routes/MacBookPower'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/WalkIn" element={<WalkIn/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/macbook-power-up" element={<MacBookPower/>}/>
      </Routes>
    </div>
  )
}

export default App
