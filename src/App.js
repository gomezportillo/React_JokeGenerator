import React from "react"

import Joke from "./Joke"
import jokesData from "./jokesData.js"

function App()
{
  const jokeComponents = jokesData.map(joke => {
    return (
      <Joke
        key       = {joke.id}
        question  = {joke.question}
        punchline = {joke.punchline}
      />
    )
  })

  return (
    <div>
      {jokeComponents}
    </div>
  )
}

export default App
