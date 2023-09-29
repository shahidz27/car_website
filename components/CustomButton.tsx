'use client'
import React from 'react'
import Image from 'next/image'
import { CustonButtonProps } from '@/types'

const CustomButton = ({title, btntype,textStyles,rightIcon,containerStyles,handleClick}:CustonButtonProps) => {
  return (
    <div>
      <button 
      disabled={false}
      type={ btntype||'button'}
      className={`custom-btn ${containerStyles}`}

      onClick={handleClick}
      >
         <span className={`flex-1 ${textStyles}`}> {title}</span>
         {rightIcon && (<div className='relative w-6 h-6 '> 
         <Image src={rightIcon} alt="right icon" fill  className='object-contain'/>
          
   
         
         </div>)}
      </button>
    </div>
  )
}

export default CustomButton
