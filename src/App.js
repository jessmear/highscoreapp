import React, {useState, useEffect} from 'react';
import './styles/app.scss';

const getRandom = (max=100, min=0) => {
  return Math.floor(Math.random()*((max+1)-min)+min)
}

const App = () => {
  const [userScore,setUserScore] = useState(0)
  const [clickCount,setClickCount] = useState(0)
  const [buttonStatus,setButtonStatus] = useState(false)
  const [inputContent,setInputContent] = useState('')
  const [userMessage,setUserMessage] = useState('')
  
  const handleNumber = () => {
    setUserScore(getRandom(100,-100))
    setClickCount(clickCount+1)
    // fix off by one error
    if(clickCount>=10) { setButtonStatus(true) }
  }

  const handleInput = (event) => {
    setInputContent(event.target.value);
  }

  const handleSubmit = () => {
    const data = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        name: inputContent,
        score: userScore,
        clicks: clickCount
      })
    }
    // fetch('placeholder.com/placeholder', data)
    //  .then(response => response.json())
    //. .then( )
    console.log(`Name: ${inputContent}`)
    console.log(`Click Count: ${clickCount}`)
    console.log(`User Score: ${userScore}`)
  }
  
  return (
    <>
      <h1>Score: {userScore}</h1>
      <h1>Clicks: {clickCount}</h1>
      <button onClick={() => { handleNumber() }} disabled={buttonStatus}>Try Your Luck</button>
      <label>Name </label>
      <input type='text' value={inputContent} onChange={handleInput}></input>
      <button onClick={() => { handleSubmit() }} disabled={buttonStatus}>Submit</button>
    </>
  )
}

export default App