import React from 'react'

const TitleHeader = ({ title, text, number }) => {
  return (
    <div className='flex justify-between items-center'>
      <div className=''>
        <h1 className='gradient-title font-semibold md:text-6xl text-4xl'>{title}</h1>
        <h1 className='md:text-3xl md:mt-5'>{text}</h1>
      </div>

      <div className='md: flex items-center gap-7'>
        <div className='w-36 border border-white-50'></div>
        <p className='gradient-title text-6xl'>{number}</p>
      </div>
    </div>
  )
}

export default TitleHeader
