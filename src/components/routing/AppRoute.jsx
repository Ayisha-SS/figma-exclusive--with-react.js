import React from 'react'
import Home from '../screens/home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Product from '../screens/product/Product'
import { Context } from '../context/Store'
// import TopBar from '../includes/topbar/TopBar'

function AppRoute() {
  return (
    <div>
        <Router>
          {/* <TopBar/> */}
          <Context>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/product/:id' element={<Product/>} />
            </Routes>
          </Context>
        </Router>
    </div>
  )
}

export default AppRoute