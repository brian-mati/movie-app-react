import React, { useState,useEffect } from 'react'
import Search from './components/search'

const API_BASE_URL = 'https://api.themoviedb.org/4/'
const API_KEY = import.meta.env.VITE_TMDB_API_KEY

const API_OPTIONS = {
  method : 'GET',
  headers : {
    accept:'application/json',
    authorization : `Bearer ${API_KEY}`
  }
}

const App = () => {
  const [searchTerm,setSearchTerm] = useState(' ')
  const [errorMessage,setErrorMessage] = useState('')
  const fetchMovies =  async() => {
    try{
      const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`

      const response = await (fetch(endpoint,API_OPTIONS))

    } catch{
      console.error(`error fetching movirs:${error}`)
      setErrorMessage(value : 'Error fetching movies.Please try again later');
    }
  }
  useEffect( () => {

  })
  return (
   <main>
    <div className='pattern'> 
      <div className='wrapper'>
          <header>
            <img src="./hero.png" alt="hero png" />
            <h1>Find <span className="text-gradient">movies</span> you'll enjoy without the hassle </h1>
            <Search searchTerm ={searchTerm} setSearchTerm ={setSearchTerm}/>
          </header>
         <section className='all-movies'> 
          <h2>All movies</h2>
          {errorMessage && <p className='text-red-500'>{errorMessage}</p>}
         </section>
      </div>
    </div>
   </main>
  )
}

export default App