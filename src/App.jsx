import './App.css'
import { Route, Routes } from 'react-router-dom'
import WalkIn from './routes/WalkIn'
import Home from './routes/Home'
import About from './routes/About'
import Services from './routes/Services'
import Contact from './routes/Contact'
import MacBookPower from './routes/MacBookPower'
import MacBookScreen from './routes/MacBookScreen'
import MacBookSpill from './routes/MacBookSpill'  
import MacBookBattery from './routes/MacBookBattery'
import MacBookData from './routes/MacBookData'
import MacBookLogic from './routes/MacBookLogic'
import WindowsPower from './routes/WindowsPower'

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
        <Route path="/macbook-screen" element={<MacBookScreen/>}/>
        <Route path="/macbook-spill" element={<MacBookSpill/>}/>
        <Route path="/macbook-battery" element={<MacBookBattery/>}/>
        <Route path="/macbook-data" element={<MacBookData/>}/>
        <Route path="/macbook-logic-board" element={<MacBookLogic/>}/>
        <Route path="/windows-pc-wont-start-repair" element={<WindowsPower/>}/>
      </Routes>
    </div>
  )
}

export default App
