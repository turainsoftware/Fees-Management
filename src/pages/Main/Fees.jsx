import React from 'react'
import { FeesList, SecondaryNavbar } from '../../components'
import FeesNav from '../../components/Navbar/FeesNav'

const Fees = () => {
  return (
    <main class="wrapper home-wrapper">
        <SecondaryNavbar title={"Fees"}/>
        <FeesNav/>
        <FeesList/>
        
    </main>
  )
}

export default Fees