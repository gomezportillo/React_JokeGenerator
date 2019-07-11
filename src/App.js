import React from "react"

import Header from "./Header.js"
import JokeComponent from "./JokeComponent.js"

class App extends React.Component
{
  render ()
  {
    return (
      <div>
        <Header />
        <JokeComponent />
      </div>
    )
  }
}

export default App
