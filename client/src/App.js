import React from 'react';
import axios from "axios";
import './App.css';

//componenet imports
import {PlayerCards} from "./Components/PlayeyCards";
import {PlayerSearch} from "./Components/PlayerSearch";

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

  handleSearch = (searchInput) => {
    this.setState({
      players: this.state.players.filter(item => item.name.toLowerCase().includes(searchInput.search))
    })
  }

  render(){
  return (
    <div className="App" data-testid="App">
      <h1 data-testid="listHeader">Womens World Cup</h1>
      <PlayerSearch 
        handleSearch = {this.handleSearch}
      />
      {this.state.players.map(item => <PlayerCards item={item} />)}
    </div>
  );
  }
}

export default App;
