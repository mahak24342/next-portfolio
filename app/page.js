import React from 'react'
import Nav from './Nav'
import Head from './Head'
import About from './About'
import Port from './Port'
import Skills from './Skills'
import Cont from './Cont'
import Footer from './Footer'
import Scroll from './Scroll'

const page = () => {
  return (
    <div>
      <Nav/>
      <Head/>
      <About/>
     <Port/>
     <Skills/>
     <Cont/>
     <Scroll/>
     <Footer/>
    </div>
  )
}

export default page