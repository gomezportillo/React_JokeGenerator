import React from "react"

import Joke from "./Joke"

class JokeComponent extends React.Component
{
  constructor()
  {
    super()

    this.state = { currentJoke: null }
    this.handleClick = this.handleClick.bind(this) // to be able to use the state from the function
  }

  handleClick()
  {
    var myURL = "https://sv443.net/jokeapi/category/Programming"

    fetch(myURL)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        if (data.type === "single")
        {
          var newJoke = <Joke punchline={data.joke} />
        }
        else
        {
          var newJoke = <Joke question={data.setup}
                              punchline={data.delivery}
                        />
        }
        this.setState({ currentJoke: newJoke })
      })
      .catch(() => {
        this.setState({ currentJoke: <h2>ERROR 429: Too many requests</h2> })
      })
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
