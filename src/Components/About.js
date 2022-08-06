import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function About() {
  return (
    <div>
      <Header/>
      <div>
        <div className='bg-black text-white mx-6'>
          <div className='font-bold flex justify-center text-5xl'>About Us</div><br/>
          <div className='uppercase flex justify-center text-3xl'>We offer quality that is remembered long after the price is forgotten.</div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
