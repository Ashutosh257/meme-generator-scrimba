import React, { useEffect, useState } from 'react'

const ColorPicker = (props) => {

  function handleChange(event){
    const color = event.target.value
    props.changeTextColor(props.name, color)
  }


  return (
    <div>
        <input type="color" onChange={handleChange}/>
    </div>
  )
}

export default ColorPicker