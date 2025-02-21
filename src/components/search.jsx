import React from 'react'

const search = ({searchTerm,setSearchTerm}) => {
  return (
    <div className='text-white text-3xl'>
        <div className='search flex items-center justify-center'>
            <img src="search.svg" alt="search" />
            <input type='text' placeholder='Search through thousands of movies'
            value = {searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}  />
        </div>
    </div>
  )
}

export default search