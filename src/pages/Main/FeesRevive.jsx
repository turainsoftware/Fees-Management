import React from 'react'
import { FeesList, SecondaryNavbar, StudentSearchFees } from './../../components/index'

const FeesRevive = () => {
  return (
    <main class="wrapper home-wrapper">
        <SecondaryNavbar title={"Fees Revive"}/>
        <StudentSearchFees/>
        <FeesList/>
    </main>
  )
}

export default FeesRevive