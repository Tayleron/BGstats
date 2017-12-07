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
      <div id="container">
        <header>
          <h1>Board game Night Stats</h1>
        </header>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Users</a></li>
            <li><a href="#">Games</a></li>
            <li><a href="#">Stats</a></li>
          </ul>
        </nav>
        <div id="main">
          <form action="" id="playerCreate">
            Create a new Player:
            <input type="text" name="playerName" placeholder="Name"/>
            <input type="submit" value="Create" onClick="player()"/>
          </form>
        </div>
        <footer>{"Copyright Andrew Robinson " + String.fromCharCode(169) + " 2017"}
        </footer>
      </div>
    )
  }

}
export default App
