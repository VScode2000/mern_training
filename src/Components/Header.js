import React from 'react'
import logo from '../img/logo.png';
import {BsFillTelephoneFill} from 'react-icons/bs'
import {NavLink} from 'react-router-dom'
export default function Header() {
  return (
    <div className='shadow-xl'>
    <div>
        <nav className="bg-white border-gray-200 dark:bg-gray-900 ">
    <div className="flex flex-wrap justify-between items-center  max-w-screen-2xl px-4 md:px-6 py-2.5 ">
        <a href="/" className="flex items-center">
            <img src={logo} className="mr-3 h-10 sm:h-16 w-17" alt="JTL Logo"/>
             <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Jain Tools India</span> 
        </a>
        <div className="flex items-center mr-6 text-sm font-medium text-gray-500 dark:text-white"><BsFillTelephoneFill/>&nbsp;&nbsp;
            <a href="tel:9540963674" className="hover:underline">+91-9540963674</a>
        </div>
    </div>
</nav>
 <nav className="bg-gray-50 dark:bg-gray-700">
    <div className="py-1 mx-auto max-w-screen-xl md:px-6">
        <div className="flex items-center justify-between flex-wrap">
            <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm uppercase font-semibold">
                <li>
                    <NavLink to={'/'} className="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</NavLink>
                </li>
                <li>
                    <NavLink to={'/about-us'} className="text-gray-900 dark:text-white hover:underline">About US</NavLink>
                </li>
                <li>
                    <NavLink to={'/products'} className="text-gray-900 dark:text-white hover:underline">Products</NavLink>
                </li>
                <li>
                    <NavLink to={'/contact-us'} className="text-gray-900 dark:text-white hover:underline">Contact US</NavLink>
                </li>
            </ul>
            <input type="text" id="search-navbar" className="block p-2 pl-10 w-80 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."></input>
        </div>
    </div>
</nav>

</div>
</div>
  )
}
