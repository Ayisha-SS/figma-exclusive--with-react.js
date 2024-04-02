import React from 'react'
import Home from '../screens/home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
<<<<<<< HEAD
import Product from '../screens/product/Product'
import { Context } from '../context/Store'
// import TopBar from '../includes/topbar/TopBar'
=======
import TopBar from '../includes/topbar/TopBar'
>>>>>>> c0c41f5bc970ff3c3fe2ffd36bd4dec30d84f96b

function AppRoute() {
  return (
    <div>
        <Router>
          {/* <TopBar/> */}
<<<<<<< HEAD
          <Context>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/product/:id' element={<Product/>} />
            </Routes>
          </Context>
=======
          <Routes>
            <Route path='/' element={<Home/>}/>
          </Routes>
>>>>>>> c0c41f5bc970ff3c3fe2ffd36bd4dec30d84f96b
        </Router>
    </div>
  )
}

export default AppRoute