import React from 'react'

const Button = ({color , btnText}) => {
    console.log(color,btnText)
  return (
    <button style={{backgroundColor : color && color ,color: color && "white"}} className='px-4 py-2 rounded-full font-semibold'>{btnText}</button>
  )
}

export default Button