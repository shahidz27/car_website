"use client"
import React, { use } from 'react'
import { useState } from 'react'
import { SearchManufactures } from '.'

const SearchBar = () => {
    const [manufacturer,setManufacturer]=useState(" ");
    const handleSearch =()=>{}
  return (
   <form className='searchbar' onSubmit={handleSearch}>
    <div className='searchbar__item'>
        <SearchManufactures
        manufacturer ={manufacturer }
        setManufacturer={ setManufacturer}
        />

    </div>
    </form>
  )
}

export default SearchBar
