"use client"
import React from 'react'
import { CustomButton } from '.'

const Hero = () => {
    const handleScroll=()=>{

    }
  return (
    <div className='hero'>
      <div className='flex-1 pt-36 padding-x'>
        <h1 className='hero__title'>
            find , book, rent the car-quickly and easily
        </h1>
        <p className='hero__subtitle'>
            streamline your car rental experiances with our effortless process.
        </p>
        <CustomButton
        title="explore cars"
        containerStyles="bg-primary-blue text-white rounded-full mt-10"

        handleClick={handleScroll}/>
      </div>
    </div>
  )
}

export default Hero
