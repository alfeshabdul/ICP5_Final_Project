import React from 'react'
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div>
     <h1>
      Hello there
     </h1>
     <Link to="mensproducts">MensProducts</Link>
    </div>
  )
}

export default Home
