import React from 'react';
import './Pokecard.css';


const  POKEMON_API ="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"

//for single Pokemon card...

const Pokecard =(props) => {
    let img = `${POKEMON_API}${props.id}.png`;
    return (
        <div className="Pokecard">
            <div>{props.name}</div>
            <img src={img} />
            <div>Type: {props.type}</div>
            <div>EXP:{props.exp}</div>
        </div>
    );
}

export default Pokecard;