import React from 'react'
import "./styles/style.buttons.css"

export default function Button1({label,width}) {
  return (
    <button className='signup' style={{width:width}}>{label}</button>
  )
}
