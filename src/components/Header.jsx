import React from 'react'
import illustration from '../assets/illustration-working.svg'

const Header = () => {
  return (
    <section id="header">
      <div className="shortly__header flex-row items-center md:flex md:mt-12 mb-24">
        <div className='order-2 overflow-hidden'>
          <img
            src={illustration}
            alt="Working"
            className="scale-125 mt-[10%] mb-[15%] ml-[20%] md:ml-0 md:pl-[10%] xl:scale-100 xl:pl-0 xl:ml-[10%] xl:mt-0 xl:mb-[5%]"
          />
        </div>
        <div className="px-6 sm:pl-12 lg:pl-24 flex flex-col justify-center xl:w-1/2">
          <h1 className="text-slate-700 text-center md:text-left my-4">
            More than just shorter links
          </h1>
          <p className="head-p text-center md:text-left my-3">
            Build your brand`s recognition and get detailed insights on how your
            links are performing.
          </p>
          <button
            className="light-btn-lg rounded-3xl mx-auto md:ml-0 my-4"
            type="button"
          >
            Get started
          </button>
        </div>
      </div>
    </section>
  )
}

export default Header
