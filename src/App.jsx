import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../src/pages/Home'
import Ai from './pages/Ai'
import Jobs from './pages/Jobs'
import Services from './pages/Services'
import Clients from './pages/Clients'
import Stats from './pages/Stats'
import Schedule from './pages/Schedule'
import About from './pages/About'
import CustomerServiceSection from './components/containers'
import CustomersPage from './pages/Customers'
import Product from './pages/Product'
import Carrer from './pages/Carrer'

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
        <Route path="/about" element={<About />} />
        <Route path="/customer" element={<CustomersPage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/career" element={<Carrer />} />









      </Routes>
    </Router>
  )
}

export default App
