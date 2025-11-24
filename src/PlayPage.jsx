import React, { useState } from "react";
import { PokemonSelect } from "./PokemonSelect"
import "./play.css";

export default function Play() {
  const [player, setPlayer] = useState("Your Team");


  return (
    <>

    <button className="menu-button" onClick={() => {player == "Your Team" ? setPlayer("Opponent Team") : setPlayer("Your Team")}}>{player}</button>
    
    <div className={player == "Your Team" ? "show" : "hide"}>
      <div className="pokemon-info">
        <PokemonSelect player="user"/>
        <PokemonSelect player="user"/>
      </div>

      <div className="pokemon-info" id="pok-spacer">
        <PokemonSelect player="user"/>
        <PokemonSelect player="user"/>
      </div>
        <div className="pokemon-info" id="pok-spacer">
        <PokemonSelect player="user"/>
        <PokemonSelect player="user"/>
      </div>
    </div>

    <div className={player == "Opponent Team" ? "show" : "hide"}>
      <div className="pokemon-info">
        <PokemonSelect player="opponent"/>
        <PokemonSelect player="opponent"/>
      </div>

      <div className="pokemon-info" id="pok-spacer">
        <PokemonSelect player="opponent"/>
        <PokemonSelect player="opponent"/>
      </div>

        <div className="pokemon-info" id="pok-spacer">
        <PokemonSelect player="opponent"/>
        <PokemonSelect player="opponent"/>
      </div>
    </div> 

    

      <div className="bottom-content"></div>
    </>
  );
}
