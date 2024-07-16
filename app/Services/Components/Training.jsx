let TrainingData = [
  {
    img: "/img/Training/img1.svg",
    name: "Professional",
    name1: "Support",
    dis: "Get support when you need it the most with firm SLAs and actual answers"
  },
  {
    img: "/img/Training/img2.png",
    name: "Quarterly",
    name1: "Audits",
    dis: "Check in quarterly against baseline tests and make sure your team is headed in the right direction"
  },
  {
    img: "/img/Training/img3.svg",
    name: "Hands On Training",
    name1: "Training",
    dis: "Learn the fundamentals of Gatsby’s technology in a live session, including Q&A, hosted by our team"
  },
]
import React from 'react'

const Training = () => {
  return (
    <div className='w-full min-h-screen text-center'>
        <h1 className='text-[42px] font-bold'>Dedicated support and training for the entire team</h1>
        <div className='grid grid-cols-3 px-28'>
          {TrainingData.map((items, index) => {
            return(
              <div className='flex flex-col text-center items-center gap-4'>
                <img src={items.img} alt="" />
                <h1 className='text-2xl font-bold'>{items.name} <br /> <span className='text-[#BC027F]'>{items.name1}</span></h1>
                <p>{items.dis}</p>
              </div>
            )
          })}
        </div>
    </div>
  )
}

export default Training