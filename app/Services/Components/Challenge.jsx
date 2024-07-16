let challengeData = [
    {
        img: "/img/Challenge/img1.svg",
        name: "Performance Concierge",
        dis: "Get an audit into the performance of your website, partnering with Gatsby to build the fastest, smoothest web experience",
        link: "Performance"
    },
    {
        img: "/img/Challenge/img2.svg",
        name: "Builds Concierge",
        dis: "Optimize build times of your website with the help of an audit and remediation plan from the Gatsby experts",
        link: "Builds"
    },
    {
        img: "/img/Challenge/img3.svg",
        name: "Onboarding Concierge",
        dis: "Designed to accelerate Gatsby adoption with best practices and live FAQ sessions, Onboard your team with expertise",
        link: "Onboarding"
    },
]
import React from 'react'

const Challenge = () => {
  return (
    <div className='w-full min-h-screen text-center py-32'>
        <h1 className='text-4xl  font-bold'>Pick a challenge. We've got you covered.</h1>
        <div className='flex px-32 gap-8 py-16'>
            {challengeData.map((items, index) => {
                return(
                    <div className='flex flex-col w-full items-center gap-4'>
                        <img className='w-[100px]' src={items.img} alt="" />
                        <h1 className='text-2xl font-bold'>{items.name}</h1>
                        <p className='text-[14px] text-gray-500'>{items.dis}</p>
                        <a className='text-lg underline hover:no-underline text-[#BC027F] font-extrabold' href="#">{items.link}</a>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Challenge