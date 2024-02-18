import React from 'react';
import Offer from './Offer';
import { Link } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      {/* ========== HEADER ========== */}
      <header className="sticky top-0 z-50 w-full text-sm mb-10 bg-white shadow-md dark:bg-gray-800 ">
        <nav className="relative max-w-[85rem] w-full mx-auto px-4 py-3 md:flex md:justify-between md:items-center md:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <a className="flex-none text-xl font-semibold dark:text-white" href="#" aria-label="Brand"><span style={{ color: "#C60C30" }}>CODE</span><span style={{ color: "black" }}>  N</span><span style={{ color: "#073980" }}>  CLOUD</span></a>
            <div className="md:hidden">
              <button type="button" className="hs-collapse-toggle size-8 flex justify-center items-center text-sm font-semibold rounded-full border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
                <svg className="hs-collapse-open:hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" /></svg>
                <svg className="hs-collapse-open:block hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
              </button>
            </div>
          </div>
         
          <div id="navbar-collapse-with-animation" className="hs-collapse hidden md:block">
            <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:pr-7">
              <NavLink to="/" className="font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500">Home</NavLink>
              <NavLink to="/courses" className="font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500">Courses</NavLink>
              <NavLink to="/blog" className="font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500">Blog</NavLink>
              <NavLink to="/resource" className="font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500">Resource</NavLink>
              <NavLink to="/contact" className="font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500">Contact Us.</NavLink>
            </div>
          </div>
        </nav>
      </header>
      {/* ========== END HEADER ========== */}
    </>
  )
}

export default NavBar;
