import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDrop, setIsOpenDrop] = useState(false);

  return (
    <>
       
      <nav className="bg-black">
        <div className="px-8 lg:px-20 md:px-10 py-6 lg:py-12 md:py-8">
          <div className="relative flex items-center justify-between h-16">
          
            <div className="flex items-center flex-1  sm:items-stretch sm:justify-start">
            {/* 1st */}
              <div className="">
                <a href='/'><img
                  className=""
                  src={logo}
                  alt="Workflow"
                /></a>

              </div>
              {/* 2nd */}
              <div className='m-auto hidden lg:block md:hidden '>
              <div className="hidden lg:block md:hidden rounded-[29px] nav-shadow px-[29px] py-3.5 semiBold">
                <div className="flex gap-10 text-base">
                  <a
                    to="/onsale"
                    className="text-lightwhite cursor-pointer transition1s hover:text-hoverClr"
                  >
                   About
                  </a>
                  <a
                    to="/productdetail"
                    className="text-lightwhite cursor-pointer transition1s hover:text-hoverClr">
               Roadmap </a>
                  <a
                    to="cart"
                    className="text-lightwhite cursor-pointer transition1s hover:text-hoverClr">
                    Team</a>
                    <a
                    to="cart"
                    className="text-lightwhite cursor-pointer transition1s hover:text-hoverClr">
                    Platfform</a>
                </div>
              </div>
              </div>
            </div>
           
            <div className="absolute inset-y-0 right-0 md:right-[25%] flex items-center lg:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={() => setIsOpen(!isOpen)}
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#fff"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-0 sm:pr-0">

            <div className='hidden lg:block md:block'>
                <button className='text-white py-3 px-8 nav-btn rounded-lg regular text-[18px]'>Litepaper</button>
            </div>
             

           
            </div>
          </div>




          
        </div>

        <div
          className={`${isOpen ? 'block' : 'hidden'
            } lg:hidden`}
          id="mobile-menu"
        >
          <div className="px-6 pt-2 pb-3 space-y-1 semiBold">
            <a
              to="#"
              className="text-lightwhite block "
            >
                 About
            </a>

            <a
              to="#"
              className="text-lightwhite block"
            >
              Roadmap
            </a>
            <a
              to="#"
              className="text-lightwhite block"
            >
           Team
            </a>
            <a
              to="#"
              className="text-lightwhite block"
            >
       Platfform
            </a>
          </div>
        </div>
      </nav>
    </>
  )
}
export default Navbar;