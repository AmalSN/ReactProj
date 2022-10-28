import React from 'react'
import Navbar from "../components/Navbar";
import {Outlet} from 'react-router-dom'

const Layout = ({active, setActive}) => {
  return (
    <div>
        <Navbar active={active} setActive={setActive}/>
        <Outlet/> 
    </div>
  )
}

export default Layout