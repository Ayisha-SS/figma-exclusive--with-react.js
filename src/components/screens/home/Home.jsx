import React from 'react'
import { Helmet } from 'react-helmet'
import TopBar from '../../includes/topbar/TopBar'
import Header from '../../includes/header/Header'


function Home() {
  return (
   <>
        <Helmet>
            <title>Exclusive | Home</title>
        </Helmet>
        <TopBar/>
        <Header/>
   </>
  )
}

export default Home
