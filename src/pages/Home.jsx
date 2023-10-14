import React from 'react'
import Navbar from '../components/Navbar'
import Listitem from '../components/Listitem'
import Fooditems from '../components/Fooditems'
import Cart from '../components/Cart'

function Home() {
  return (
    <>
        <Navbar></Navbar>
        <Listitem></Listitem>
        <Fooditems />
        <Cart/>

    </>
  )
}

export default Home