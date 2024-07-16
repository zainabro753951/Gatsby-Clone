import Link from 'next/link'
import React from 'react'

const Nav1 = () => {
  return (
    <div className='flex items-center border border-gray-100 font-themeFont not-italic justify-between px-8 text-sm py-3'>
        <div className='flex gap-5'>
            <h1 className='py-1 px-2 bg-[#F6EDFA] rounded-sm text-themePurple font-semibold text-xs tracking-wider'>MIGRATE TO NETLIFY TODAY</h1>
            <h1 className='text-[12px] text-gray-500 '>Netlify announces the next evolution of Gatsby Cloud. <a href='#' className='text-[13] underline hover:no-underline text-[#663399] font-extrabold'>Learn more</a></h1>
        </div>
        <div className='flex gap-8 text-gray-500 text-[12px]'>
            <Link href="/Support">Support</Link>
            <Link className='' href="/Login">Login</Link>
        </div>
    </div>
  )
}

export default Nav1