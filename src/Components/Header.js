import React from 'react'
import logo from '../img/logo.png';
import {NavLink} from 'react-router-dom'

export default function Header() {
  return (
    <div className='shadow-xl'>
    <div>
        <nav className="bg-white border-gray-200 justify-center">
    <div className="flex flex-wrap justify-between items-center max-w-screen-2xl px-6 py-2.5 ">
        <a href="/" className="flex items-center">
            <img src={logo} className="mr-3 h-10 lg:h-16 w-17" alt="JTL Logo"/>
             <span className="self-center text-md lg:text-xl font-semibold whitespace-nowrap">Jain Tools India</span> 
        </a>
        
            <ul className="flex flex-row mt-0 space-x-8 text-sm uppercase font-semibold">
                <li>
                    <NavLink to={'/'} className="text-gray-900 hover:none" aria-current="page">Home</NavLink>
                </li>
                <li>
                    <NavLink to={'/about-us'} className="text-gray-900 hover:none">About US</NavLink>
                </li>
                <li>
                    <NavLink to={'/products'} className="text-gray-900 hover:none">Products</NavLink>
                </li>
                <li>
                    <NavLink to={'/contact-us'} className="text-gray-900 hover:none">Contact US</NavLink>
                </li>
            </ul>
            <input type="text" id="search-navbar" className="block p-2 pl-10 w-60 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 text-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Search..."></input>
    </div>
</nav>

</div>
</div>
  )
}
