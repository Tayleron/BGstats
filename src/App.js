import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      players: 
      [
        {
          "name": 
          {
            "plays": "",
            "wins": ""
          }
        }
      ],
      games: [
        {
          "gameName": "played"
        }
      ]
    }
  }

  render() {
    console.log(this.state)
    
    return(
      null
    )
  }

}
export default App
