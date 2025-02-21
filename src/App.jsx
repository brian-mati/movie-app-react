import React from 'react'
import { useState } from 'react'

const Card = ({title})  =>{
  const [count,setCount] = useState(0)
  
  const [hasLiked,setHasLiked] = useState(false)
  return(
      <div>
        <h1 >{title}
        </h1>
        <br />
        <button onClick={() => setHasLiked(!hasLiked)}>
          {hasLiked ? "liked":"like"}
        </button>
        <br />
        <h2 onClick={ () => setCount((prevState) => prevState + 1)}>
          {count}
        </h2>
        <h2 onClick={() => setCount((prevState) => prevState - 1 )}>{count}</h2>
      </div>
    
  )
}

const App = () => {
  return (
    <div>
      <Card title= " my king" />
    </div>
  )
}

export default App