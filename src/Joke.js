import React from "react"

class Joke extends React.Component
{
  render ()
  {
    return (
      <div>
        <h3 style={{display: this.props.question ? "block" : "none"}}>Question: {this.props.question}</h3>
        <h3 style={{color: !this.props.question && "#999" }}>Answer: {this.props.punchline}</h3>
        <hr/>
      </div>
    )
  }
}

export default Joke
