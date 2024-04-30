import React from 'react'
import { Helmet } from 'react-helmet'
import TopBar from '../../includes/topbar/TopBar'
import Header from '../../includes/header/Header'
import Spotlight from './Spotlight'
import Category from './Category'
import ProductCard from '../../general/card/ProductCard'
import Services from './Services'
import FooterItem from '../../includes/footer/FooterItem'

import titleImg from "../../../assests/images/title.png"

function Home() {
  return (
    <>
      <Helmet>
          <title>Exclusive | Home</title>
      </Helmet>
      <Helmet>
      <img src={titleImg} alt="" />

      </Helmet>
      <TopBar/>
      <Header/>
      <div className='wrapper'>
        <Spotlight/>
        <Category/>
        <ProductCard/>
        <Services/>
      </div>
      <FooterItem/>
    </>
  )
}

export default Home
