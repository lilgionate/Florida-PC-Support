import './App.css'
import { Route, Routes } from 'react-router-dom'
import WalkIn from './routes/WalkIn'
import Home from './routes/Home'
import About from './routes/About'
import Services from './routes/Services'
import Contact from './routes/Contact'
import DataRecovery from './routes/DataRecovery'

import MacPhysicalDamage from './routes/MacPhysicalDamage'
import MacUpgrade from './routes/MacUpgrade'
import MacEmailAndInternet from './routes/MacEmailAndInternet'
import MacSetUp from './routes/MacSetUp'
import MacWontBoot from './routes/MacWontBoot'
import MacVirus from './routes/MacVirus'
import MacInstallWindows from './routes/MacInstallWindows'
import MacJackDcBoard from './routes/MacJackDcBoard'
import MacPowerAdapter from './routes/MacPowerAdapter'
import MacHinge from './routes/MacHinge'
import MacTopCase from './routes/MacTopCase'
import MacBookTouchpadTrackpad from './routes/MacBookTouchpadTrackpad'
import MacBookPassword from './routes/MacBookPassword'
import MacBookDvdDrive from './routes/MacBookDvdDrive'
import MacBookRamMemory from './routes/MacBookRamMemory'
import MacBookHardDrive from './routes/MacBookHardDrive'
import MacBookKeyBoard from './routes/MacBookKeyBoard'
import MacFixStartUp from './routes/MacFixStartUp'
import MacBookPower from './routes/MacBookPower'
import MacBookScreen from './routes/MacBookScreen'
import MacBookSpill from './routes/MacBookSpill'  
import MacBookBattery from './routes/MacBookBattery'
import MacBookData from './routes/MacBookData'
import MacLogicBoard from './routes/MacLogicBoard'
import MacBookLogic from './routes/MacBookLogic'

import WindowsPower from './routes/WindowsPower'
import WindowsScreen from './routes/WindowsScreen' 
import WindowsData from './routes/WindowsData'
import WindowsSlowPC from './routes/WindowsSlowPC'
import WindowsHardDrive from './routes/WindowsHardDrive' 
import WindowsSpill from './routes/WindowsSpill'

import MacRepairsPage from './routes/MacRepairsPage'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/WalkIn" element={<WalkIn/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/data-recovery" element={<DataRecovery/>}/>
        <Route path="/mac-physical-damage-repair" element={<MacPhysicalDamage/>}/>
        <Route path="/mac-upgrade" element={<MacUpgrade/>}/>
        <Route path="/mac-email-internet-repair" element={<MacEmailAndInternet/>}/>  
        <Route path="/mac-set-up-new" element={<MacSetUp/>}/>
        <Route path="/mac-wont-boot-repair" element={<MacWontBoot/>}/>
        <Route path="/mac-virus-removal" element={<MacVirus/>}/>
        <Route path="/install-windows-on-mac" element={<MacInstallWindows/>}/>
        <Route path="/mac-logic-board-replacement" element={<MacLogicBoard/>}/>
        <Route path="/mac-jack-dc-board-replacement" element={<MacJackDcBoard/>}/>
        <Route path="/mac-power-adapter-replacement" element={<MacPowerAdapter/>}/>
        <Route path="/mac-hinge-replacement" element={<MacHinge/>}/>
        <Route path="/mac-top-case-replacement" element={<MacTopCase/>}/>
        <Route path="/mac-touchpad-trackpad-replacement" element={<MacBookTouchpadTrackpad/>}/>
        <Route path="/macbook-password-reset" element={<MacBookPassword/>}/>
        <Route path="/macbook-dvd-drive-replacement" element={<MacBookDvdDrive/>}/>
        <Route path="/macbook-ram-memory-upgrade" element={<MacBookRamMemory/>}/>
        <Route path="/macbook-hard-drive-replacement-upgrade" element={<MacBookHardDrive/>}/>
        <Route path="/macbook-keyboard-replacement" element={<MacBookKeyBoard/>}/>
        <Route path="/macbook-start-up" element={<MacFixStartUp/>}/>
        <Route path="/macbook-power-up" element={<MacBookPower/>}/>
        <Route path="/macbook-screen" element={<MacBookScreen/>}/>
        <Route path="/macbook-spill" element={<MacBookSpill/>}/>
        <Route path="/macbook-battery" element={<MacBookBattery/>}/>
        <Route path="/macbook-data" element={<MacBookData/>}/>
        <Route path="/macbook-logic-board" element={<MacBookLogic/>}/>
        <Route path="/windows-pc-wont-start-repair" element={<WindowsPower/>}/>
        <Route path="/windows-pc-screen-repair" element={<WindowsScreen/>}/>
        <Route path="/windows-pc-data-recovery" element={<WindowsData/>}/>
        <Route path="/windows-pc-slow" element={<WindowsSlowPC/>}/>
        <Route path="/windows-pc-hard-drive-repair" element={<WindowsHardDrive/>}/> 
        <Route path="/windows-pc-spill-repair" element={<WindowsSpill/>}/>
        <Route path="/mac-repairs" element={<MacRepairsPage/>}/>
      </Routes>
    </div>
  )
}

export default App
