import React, { useState } from "react";
import { PokemonSelect } from "./PokemonSelect"
import "./play.css";

export default function Play() {

  return (
    <>
    <div className="user-pokemon">
      <PokemonSelect/>
      <PokemonSelect />
    </div>
    <div className="user-pokemon" id="pok-spacer">
      <PokemonSelect/>
      <PokemonSelect />
    </div>
      <div className="user-pokemon" id="pok-spacer">
      <PokemonSelect/>
      <PokemonSelect />
    </div>

      <div className="bottom-content"></div>
    </>
  );
}
