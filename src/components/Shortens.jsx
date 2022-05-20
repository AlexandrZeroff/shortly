import React from 'react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSelector } from 'react-redux'
import { selectLinks } from '../store/slice/LinkSlice'

const Shortens = () => {
  const [copiedLink, setCopiedLink] = useState()
  const links = useSelector(selectLinks)

  const copyToClipboard = (link) => {
    navigator.clipboard.writeText(link).then(() => {
      setCopiedLink(link)
    })
  }

  if (!links?.length) return null

  return (
    <section id="shortens">
      <div className="shortly__shortens box-div">
        <div className="flex flex-col items-center justify-start">
          {links.map((item) => (
            <AnimatePresence key={item.code}>
              <motion.div
                className="shortly__shortens-link bg-white w-full rounded-lg p-6 max-w-4xl mb-4"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                data-active={copiedLink === item.full_short_link2}
              >
                <div className='flex flex-col w-full md:flex-row md:items-center md:justify-between'>
                  <p className="font-medium"><a href={item.original_link}>{item.original_link}</a></p>
                  <p className="text-[#2dd0cd] md:ml-auto"><a href={item.full_short_link2}>{item.full_short_link2}</a></p>
                </div>
                <button
                  className="link-btn rounded-md mx-auto mt-4 sm:mr-0 sm:my-auto sm:ml-6"
                  type="button"
                  onClick={() => copyToClipboard(item.full_short_link2)}
                >
                  {copiedLink === item.full_short_link2
                    ? 'Copied!'
                    : 'Copy link'}
                </button>
              </motion.div>
            </AnimatePresence>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Shortens
