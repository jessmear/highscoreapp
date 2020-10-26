import React from 'react'

const Instructions = props => {
  return (
    <div className='instructions'>
      <h3 className='header'>Goal: Get the highest score you can in ten or fewer clicks.</h3>
      <p>How to Play:</p>
      <ul>
        <li>Add your name.</li>
        <li>Click the 'Try Your Luck' button.</li>
        <li>Each time you click, your score will be modified by a randomly generated number.</li>
        <li>When you are happy with your score, or out of chances, submit your name and score.</li>
      </ul>
      <label>Name</label>
      <input type='text' value={props.userInfo.name} onChange={props.handleInput} />
    </div>
  )
}

export default Instructions