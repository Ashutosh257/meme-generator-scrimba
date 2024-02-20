import React, {useState} from 'react'
import "./Toggle.css"

import sun from "../../assets/sun.svg"
import moon from "../../assets/full-moon.png"


const Toggle = () => {
  
  const [isDarkMode, setIsDarkMode] = useState(true);

  function toggle(){
    document.body.classList.toggle("dark")
    document.querySelector(".toggler--slider").classList.toggle("toggler--slider-clicked")
  }

  function handleClick(event){

    if (event.target.name === "sun"){
      setIsDarkMode(false)
      document.body.classList.remove("dark")
    } else {
      setIsDarkMode(true)
      document.body.classList.add("dark")
    }
  }

  return (
    <div className="toggler">

      <img 
        src={sun} 
        className="img--sun" 
        name="sun" 
        onClick={handleClick}
      />

      <div 
        className={isDarkMode ? "toggler--slider toggler--slider-clicked" : "toggler--slider"}
        onClick={toggle}
      >

        <div className="toggler--slider-circle"></div>
      </div>

      <img 
        src={moon} 
        className="img--moon" 
        name="moon" 
        onClick={handleClick}
      />
    </div>
  )
}

export default Toggle