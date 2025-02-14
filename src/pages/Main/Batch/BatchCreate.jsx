import React from 'react'
import {CreateBatchForm, SecondaryNavbar} from '../../../components/index'

const BatchCreate = () => {
  return (
    <main className='wrapper home-wrapper'>
        <SecondaryNavbar title={"Create Batch"}/>
        <CreateBatchForm/>
    </main>
  )
}

export default BatchCreate