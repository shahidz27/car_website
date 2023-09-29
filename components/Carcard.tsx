"use client"
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import { CarProps } from '@/types'
interface CarcardProps{
    car :CarProps
}

const Carcard = ({car}:CarcardProps) => {
    const { city_mpg ,year, transmission,make,model,drive}=car;
  return (
    <div className='car-card group'>
        <div className='car-card__content'></div>
      
    </div>
  )
}

export default Carcard
