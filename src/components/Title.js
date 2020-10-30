import React from 'react'

const Title = props => {
  return (
    <div className='title-box'>
      <h1 className='title'>{props.children}</h1>
    </div>
  )
}

export default Title