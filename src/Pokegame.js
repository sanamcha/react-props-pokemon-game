import React from 'react';
import Pokedex from './Pokedex';

const Pokegame = (props) => {
     let game1 = [];
     let game2 = [...props.pokemon];

     while(game1.length < game2.length) {
        let randomIdx = Math.floor(Math.random() * game2.length);
        let randomPokemon = game2.splice(randomIdx, 1)[0];
        game1.push(randomPokemon);
     }

     let exp1 = game1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);

     let exp2 = game2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);

     return (
         <div>
             <Pokedex pokemon = {game1} exp={exp1} isWinner ={exp1 > exp2} />
             <Pokedex pokemon = {game2} exp={exp2} isWinner = {exp2 > exp1} />
         </div>
     );
}


Pokegame.defaultProps = {
    pokemon: [
      { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
      { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
      { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
      { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
      { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
      { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
      { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
      { id: 133, name: "Eevee", type: "normal", base_experience: 65 }
    ]
  };

  export default Pokegame;