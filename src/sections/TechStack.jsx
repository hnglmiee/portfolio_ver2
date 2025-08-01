import React from 'react'
import TechIcon from '~/components/TechIcon'
import TitleHeader from '~/components/TitleHeader'
import { iconsList } from '~/constants'

function TechStack() {
  return (
    <div className='w-full h-full'>
      <div className="">
        <div className="container mx-auto md:px-10 xl:px-20 mt-20">
          <TitleHeader title={"TECH STACK"} number={"02"} text={"My Go-To Tools for Crafting Solution"} />
        </div>
        <div className="md: mt-20 mt-10 relative">
          <div className="marquee h-52">
            <div className="marquee-box md:gap-12 gap-5">
              {iconsList.map((icon, index) =>
                <TechIcon key={index} icon={icon} />
              )}
              {iconsList.map((icon, index) =>
                <TechIcon key={index} icon={icon} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TechStack
