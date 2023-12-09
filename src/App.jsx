import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import NewsBoard from './Components/NewsBoard'
import './App.css'
import './assets/photo.jpg'

const App = () => {
  const [category, setCategory] = useState("general");
  const [country, setcountry] = useState("us")
  return (
    <div>
      <Navbar setCategory={setCategory} setcountry={setcountry}/>
      <NewsBoard category={category} country={country}/>
    </div>
  )
}

export default App