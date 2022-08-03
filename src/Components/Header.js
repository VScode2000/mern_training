import {useState} from 'react'
import logo from '../img/logo.png';
import {NavLink} from 'react-router-dom'

export default function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className='shadow-xl'>
    <div>
        <nav className="border-gray-200 justify-center bg-gray-900">
    <div className="flex flex-wrap justify-between items-center max-w-screen-2xl px-6 py-2.5 ">
        <a href="/" className="flex items-center">
            <img src={logo} className="mr-3 h-8 lg:h-9" alt="JTL Logo"/>
             <span className="self-center text-white text-md lg:text-lg font-semibold whitespace-nowrap">Jain Tools India</span> 
        </a>
        <section className="flex lg:hidden">
          <div
            className="space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
          <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>

            <ul className="flex flex-col text-xl uppercase font-semibold">
            <input type="text" id="search-navbar" className="inline-block p-2.5 pl-8 w-60 text-gray-900 bg-white rounded-lg border border-gray-300 text-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Search..."></input>
                <li className='mt-7'>
                    <NavLink to={'/'} className="text-white hover:none" aria-current="page">Home</NavLink>
                </li>
                <li className='mt-7'>
                    <NavLink to={'/about-us'} className="text-white hover:none">About US</NavLink>
                </li>
                <li className='mt-7'>
                    <NavLink to={'/products'} className="text-white hover:none">Products</NavLink>
                </li>
                <li className='mt-7'>
                    <NavLink to={'/contact-us'} className="text-white hover:none">Contact US</NavLink>
                </li>
            </ul>
    </div>
    </section>

               <ul className="hidden lg:flex flex-row mt-0 space-x-8 text-sm uppercase font-semibold">
                  <li>
                      <NavLink to={'/'} className="text-white hover:none" aria-current="page">Home</NavLink>
                 </li>
                 <li>
                      <NavLink to={'/about-us'} className="text-white hover:none">About US</NavLink>
                  </li>
                  <li>
                      <NavLink to={'/products'} className="text-white hover:none">Products</NavLink>
                  </li>
                  <li>
                      <NavLink to={'/contact-us'} className="text-white hover:none">Contact US</NavLink>
                  </li>
              </ul>

            <input type="text" id="search-navbar" className="hidden lg:block p-2 pl-8 w-60 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 text-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Search..."></input>
    </div>
</nav>
<style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: fixed;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: #111827;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
</div>
</div>
  )
}
