import React, {Component} from 'react';
import './App.css';
import PokemonList from './PokemonList'


class App extends Component {

  state = {
    pokemons: []
  }

  componentDidMount(){
    this.getPokemon()
  }

  getPokemon = () => {
    fetch('https://pokeapi.co/api/v2/pokemon/')
      .then(response => response.json())
      .then(response => this.setState({
        pokemons: response.results
      }))
  }

  render(){
    return (
      <div className="App">
        <PokemonList pokemons={this.state.pokemons}/>
      </div>
    );
  }
}
export default App;
