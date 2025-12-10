import React from 'react'
import Home from './Home'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <div>
       <div className="pb-16">
        <Navbar />
      </div>
      <Home/>
    </div>
  )
}

export default App