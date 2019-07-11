import React from "react"

import Joke from "./Joke"
import jokesData from "./data/jokesData.js"

class JokeComponent extends React.Component
{
  constructor()
  {
    super()

    this.state = {
      allJokes: jokesData.map(joke => {
        return (
          <Joke
            key       = {joke.id}
            question  = {joke.question}
            punchline = {joke.punchline}
            />
        )
      })
    }
    this.handleClick = this.handleClick.bind(this) // to be able to use the state from the function
  }

  handleClick()
  {
    var randomIndex = this.generateRandomNumber()
    var newJoke = this.state.allJokes[randomIndex]
    this.setState({ currentJoke: newJoke})
  }

  generateRandomNumber()
  {
    var min = 0;
    var max = this.state.allJokes.length
    var rand = min + Math.random() * (max - min);
    return Math.floor(rand)
  }

  render ()
  {
    return (
      <div>
        <div id="button-div">
          <button onClick={this.handleClick}>Generate joke!</button>
        </div>
        <hr/>
        <div>
          {this.state.currentJoke}
        </div>
      </div>
    )
  }
}

export default JokeComponent
