import React from 'react';
import axios from "axios";
import './App.css';

//componenet imports
import {PlayerCards} from "./Components/PlayeyCards";

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      players: []
    }
  };

  componentDidMount(){
    axios.get('http://localhost:5000/api/players')
    .then(response => {
      console.log(response.data);
      this.setState({players: response.data});
    })
    .catch(err => console.log(err))
  }

  render(){
  return (
    <div className="App">
      {this.state.players.map(item => <PlayerCards item={item} />)}
    </div>
  );
  }
}

export default App;
