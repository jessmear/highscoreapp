import React from 'react'

const Button = props => {
  return (
    <button 
      className={props.classes} 
      onClick={props.onclick} 
      disabled={props.disabled}
    >
      {props.children}
    </button>
  )
}

export default Button