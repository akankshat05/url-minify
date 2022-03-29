import { useState } from 'react'
import Head from 'next/head'
import NavBar from 'components/NavBar'
import Features from 'components/Features'
import Reg from 'components/Reg/Reg'
import Footer from 'components/Footer/Footer'

export default function signup() {
  return (
    <div className="flex-column">
      <NavBar />
      <Reg />
      <Footer />
    </div>
  )
}
