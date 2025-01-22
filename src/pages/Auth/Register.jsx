import React, { useContext } from 'react'
import { SecondaryNavbar, TeacherRagistrationForm } from '../../components'

const Register = () => {
  return (
    <main className="wrapper home-wrapper">
        <SecondaryNavbar title={"Register as a Teacher"}/>
        <TeacherRagistrationForm/>
    </main>
  )
}

export default Register