import React, { useState } from 'react';
import "./JokeContent.css"

const JokeContent = () => {
  let [joke, setJoke] = useState("");
  let [error, setError] = useState(false);

  let getJoke = () => {
    fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
      .then((res) => res.json())
      .then((data) => {
        setJoke(data.joke)
        setError(false)
      })
      .catch((err) => {
        setJoke("")
        setError(true)
      })
  }

  return (
    <div className='joke'>
      <button onClick={getJoke}>Get new Joke</button>
      <p>{joke}</p>
      {error &&
        <p className='error'>Something wrong. please check!</p>
      }
    </div>
  )
}

export default JokeContent
