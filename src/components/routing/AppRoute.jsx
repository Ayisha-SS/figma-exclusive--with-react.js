import React from 'react'
import Home from '../screens/home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TopBar from '../includes/topbar/TopBar'

function AppRoute() {
  return (
    <div>
        <Router>
          {/* <TopBar/> */}
          <Routes>
            <Route path='/' element={<Home/>}/>
          </Routes>
        </Router>
    </div>
  )
}

export default AppRoute