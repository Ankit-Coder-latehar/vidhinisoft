import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../src/pages/Home'
import Ai from './pages/Ai'
import Jobs from './pages/Jobs'
import Services from './pages/Services'
import Clients from './pages/Clients'
import Stats from './pages/Stats'
import Schedule from './pages/Schedule'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ai" element={<Ai />} />
        <Route path="/job" element={<Jobs />} />
        <Route path="/service" element={<Services />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/stat" element={<Stats />} />
        <Route path="/schedule" element={<Schedule />} />





      </Routes>
    </Router>
  )
}

export default App
