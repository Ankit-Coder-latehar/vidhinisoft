import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../src/pages/Home'
import Ai from './pages/Ai'
import Jobs from './pages/Jobs'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ai" element={<Ai />} />
        <Route path="/job" element={<Jobs />} />

      </Routes>
    </Router>
  )
}

export default App
