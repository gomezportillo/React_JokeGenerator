import React from "react"

import Header from "./Header.js"
import Footer from "./Footer.js"
import JokeComponent from "./JokeComponent.js"

class App extends React.Component
{
  render ()
  {
    return (
      <div>
        <Header />
        <JokeComponent />
        <Footer />
      </div>
    )
  }
}

export default App
