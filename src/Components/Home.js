import React from 'react'
import Carousel from './Carousel/Carousel'
import Header from './Header'
import Footer from './Footer'

export default function Home() {
  return (
    <div>
        <Header/>
        <div className='max-w-full flex justify-center m-10'>
<Carousel/>
</div>
  <Footer/>
    </div>
  )
}
