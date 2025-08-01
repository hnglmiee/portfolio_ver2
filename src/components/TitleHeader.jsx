import React from 'react'

const TitleHeader = ({ title, text, number }) => {
  return (
    <div className='flex justify-between items-center'>
      <div>
        <h1 className='font-semibold md:text-6xl text-4xl text-[#37568f]'>{title}</h1>
        <h1 className='md:text-3xl md:mt-5 text-[#37568f]'>{text}</h1>
      </div>

      <div className='md:flex items-center gap-7'>
        <div className='w-36 border border-[#37568f]'></div>
        <p className='text-6xl text-[#37568f]'>{number}</p>
      </div>
    </div>
  )
}

export default TitleHeader
