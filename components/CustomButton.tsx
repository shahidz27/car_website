'use client'
import React from 'react'
import Image from 'next/image'
import { CustonButtonProps } from '@/types'

const CustomButton = ({title, btntype,containerStyles,handleClick}:CustonButtonProps) => {
  return (
    <div>
      <button 
      disabled={false}
      type={ btntype||'button'}
      className={`custom-btn ${containerStyles}`}

      onClick={handleClick}
      >
         <span className={`flex-1`}> {title}</span>
      </button>
    </div>
  )
}

export default CustomButton
