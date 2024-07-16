import React from 'react'

const Hero = () => {
  return (
    <div className='w-full min-h-[74vh] px-24 grid grid-cols-2 place-items-center gap-11'>
        <div className='flex flex-col gap-6'>
            <h1 className='text-[42px] leading-[46px] font-bold'>Gatsby Cloud and Netlify Cloud are uniting!</h1>
            <p className='text-[17px]'>Netlify is offering all Gatsby Cloud customers easy migration paths to Netlify to unite two industry-leading platforms into one.</p>
            <div className='flex gap-8 items-center text-[18px]'>
                <a className='px-7 py-3 border-2 border-transparent bg-themePurple transition-all duration-500 hover:bg-[#542C85] text-white rounded-lg' href="#">Learn More</a>
                <a className="underline text-themePurple hover:no-underline font-medium" href="#">Request Demo</a>
            </div>
        </div>
        <div>
            <img src="/img/hero.avif" alt="" />
        </div>
    </div>
  )
}

export default Hero