import React from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';


const Pokedex = (props) => {
  let winMsg = null;
  if(props.isWinner) {
    winMsg=<h2 className="Poke-winner">THIS GAME WINS.</h2>;
  }

  return (
    <div className="Pokedex">
      <h2>Pokedex</h2>
      <div className="Poke-cards">
      {props.pokemon.map(p=>(
        <Pokecard
        id={p.id}
        name={p.name}
        type={p.type}
        exp={p.base_experience} />
      ))
      }</div>
      
      <h4>Total Experience:{props.exp}</h4>
      {winMsg}
      </div>
  );
}

export default Pokedex;

