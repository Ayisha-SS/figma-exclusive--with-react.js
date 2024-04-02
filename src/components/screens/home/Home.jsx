import React from 'react'
import { Helmet } from 'react-helmet'
import TopBar from '../../includes/topbar/TopBar'
import Header from '../../includes/header/Header'
<<<<<<< HEAD
import Spotlight from './Spotlight'
import Category from './Category'
import ProductCard from '../../general/card/ProductCard'
import Services from './Services'
import FooterItem from '../../includes/footer/FooterItem'
=======
>>>>>>> c0c41f5bc970ff3c3fe2ffd36bd4dec30d84f96b


function Home() {
  return (
   <>
        <Helmet>
            <title>Exclusive | Home</title>
        </Helmet>
        <TopBar/>
        <Header/>
<<<<<<< HEAD
        <div className='wrapper'>
          <Spotlight/>
          <Category/>
          <ProductCard/>
          <Services/>
        </div>
        <FooterItem/>
=======
>>>>>>> c0c41f5bc970ff3c3fe2ffd36bd4dec30d84f96b
   </>
  )
}

export default Home
