import React from "react";
import Taskbar from "./taskbar.js";
import DisplayPlayers from "./displayPlayers.js";
import DisplayGames from "./displayGames.js";
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
          <h1>The Haunted Household</h1>
          <br/>
          <h1>Board Game Night Stats</h1>
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
          <Taskbar />
          <DisplayPlayers />
          <DisplayGames />
        </div>
        <footer>
          {"Copyright Andrew Robinson " + String.fromCharCode(169) + " 2017"}
        </footer>
      </div>
    )
  }

}
export default App
