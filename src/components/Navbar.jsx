import React, { useState } from 'react'
import logo from '../assets/logo.svg'
import { RiMenuFill, RiCloseFill } from 'react-icons/ri'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <section id="navbar">
      <div className="shortly__navbar h-24 flex items-center box-div lg:px-24 relative">
        <img src={logo} alt="Logo" className="h-8" color="#334155" />
        <nav className="hidden md:flex flex-row items-center ml-8 lg:ml-16">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#resources">Resources</a>
        </nav>
        <nav className="ml-auto hidden md:inline-flex">
          <a href="#login">Login</a>
        </nav>
        <button className="light-btn rounded-3xl my-4 hidden md:inline min-w-[120px]" type="button">
          Sign Up
        </button>
        <div className="ml-auto md:hidden">
          {toggleMenu ? (
            <RiCloseFill
              className="cursor-pointer"
              color="#334155"
              size={28}
              onClick={() => setToggleMenu(!toggleMenu)}
            />
          ) : (
            <RiMenuFill
              className="cursor-pointer"
              color="#334155"
              size={24}
              onClick={() => setToggleMenu(!toggleMenu)}
            />
          )}
        </div>
        {toggleMenu && (
          <AnimatePresence>
            <motion.div
              className="shortly__navbar-dropdown w-[90%]
              rounded-md p-4 bg-[#3a3053]
              absolute top-24 left-1/2 ml-[-45%] flex flex-col items-center z-10"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
            >
              <nav className="flex flex-col items-center">
                <a href="#features">Features</a>
                <a href="#pricing">Pricing</a>
                <a href="#resources">Resources</a>
              </nav>
              <div className="h-[1px] bg-gray-600 my-6 w-10/12"></div>
              <nav>
                <a href="#login">Login</a>
              </nav>
              <button
                className="light-btn rounded-3xl my-4 w-10/12 max-w-[210px]"
                type="button"
              >
                Sign Up
              </button>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </section>
  )
}

export default Navbar
