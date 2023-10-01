"use client";
import { useState,Fragment } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Listbox,Transition } from '@headlessui/react';

import React from 'react'
import { CustomFilterProps } from '@/types';

const CustomFilter = ({title,options}:CustomFilterProps) => {
  const [selected,setSelected]=useState(options[0]);
  return (
    <div className='w-fit'>
        <Listbox
        value={selected}
        onChange={(e)=>setSelected(e)}>
          <div className='relative w-fit z-10'>
            <Listbox.Button className="custom-filter__btn">
                <span className='block truncate'>{selected.title}</span>
                <Image src="/chevron-up-down.svg" width={20} height={20} alt="up-down" className='object-contain'/>

            </Listbox.Button>
            <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
            >
              <Listbox.Options className="custom-filter__options"></Listbox.Options>
            </Transition>

          </div>
        </Listbox>
      
    </div>
  )
}

export default CustomFilter
