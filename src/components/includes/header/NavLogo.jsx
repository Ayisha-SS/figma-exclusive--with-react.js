import React from 'react'
import { Link } from 'react-router-dom'

function NavLogo() {
  return (
    <>
         <h1>
            <Link to='/'>
                <img src={require(`../../../assests/images/Logo.png`)} alt="Logo" />
            </Link>
        </h1>
    </>
  )
}

export default NavLogo