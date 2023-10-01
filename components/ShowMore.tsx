"use client";
import { ShowMoreProps } from '@/types';
import { useRouter } from 'next/navigation';
import CustomButton from './CustomButton';
import React from 'react'

const ShowMore = ({pageNumber,isNext}:ShowMoreProps) => {
    const router=useRouter();
    const handleNavigation=()=>{}
  return (
    <div className='w-full flex-center gap-5 mt-10'>
      {!isNext&&(<CustomButton 
      title="showmore"
      btntype='button'
      containerStyles='bg-primary-blue text-white rounded-full'
      handleClick={handleNavigation}

      />)}
    </div>
  )
}

export default ShowMore
