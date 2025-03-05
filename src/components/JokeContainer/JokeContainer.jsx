import React from 'react'
import JokeContent from '../JokeContent/JokeContent'
import "./JokeContainer.css"

const JokeContainer = () => {
  return (
    <div className='joke-container'>
      <h1><span>Joke Genrator</span> Using React And Joke API</h1>
      <JokeContent/>
    </div>
  )
}

export default JokeContainer
