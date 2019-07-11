import React from "react"

import Joke from "./Joke"
import jokesData from "./data/jokesData.js"

class JokeComponent extends React.Component
{
  constructor()
  {
    super()

    this.state = {
      jokeComponents: jokesData.map(joke => {
        return (
          <Joke
            key       = {joke.id}
            question  = {joke.question}
            punchline = {joke.punchline}
            />
        )
      })
    }
  }

  render ()
  {
    return (
      <div>
        {this.state.jokeComponents}
      </div>
    )
  }
}

export default JokeComponent
