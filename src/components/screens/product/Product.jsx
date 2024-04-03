import React from 'react'
import { Helmet } from 'react-helmet'
import TopBar from '../../includes/topbar/TopBar'
import Header from '../../includes/header/Header'
import ProductDetail from './ProductDetail'
import FooterItem from '../../includes/footer/FooterItem'
// import { Context } from '../../context/Store'

function Product() {
  return (
    <>
         <Helmet>
            <title>Exclusive | Product</title>
        </Helmet>
        <TopBar/>
        <Header/>
        <div>
            <ProductDetail/>
        </div>
        <FooterItem/>
    </>
  )
}

export default Product