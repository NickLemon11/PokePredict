import React, { useState } from "react";
import { MoveInput } from "./Dropdown";

export function PokemonSelect() {
 const [inputName, setInputName] = useState('');
  const [img, setImg] = useState(null);
  const [type, setType] = useState(null);
  const [moves, setMoves] = useState([]);
  const [activeMoveIndex, setActiveMoveIndex] = useState(null);
  const [hp, setHp] = useState(0);
  const [attack, setAttack] = useState(0);
  const [defense, setDefense] = useState(0);
  const [specialAttack, setSpecialAttack] = useState(0);
  const [specialDefense, setSpecialDefense] = useState(0);
  const [speed, setSpeed] = useState(0);

  const getPokemonImage = async (name) => { //fetches data from pokeapi based the passed in name from the user input
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
      if (!res.ok) throw new Error("Pokemon not found");

      const data = await res.json();
      setImg(data.sprites.other["official-artwork"].front_default);
      setType(data.types.map(t => t.type.name)); 
      setMoves(data.moves.map(m => m.move.name));

      setHp(data.stats.find(s => s.stat.name === "hp").base_stat);
      setAttack(data.stats.find(s => s.stat.name === "attack").base_stat);
      setDefense(data.stats.find(s => s.stats.name === "defense").base_stat);
      setSpecialAttack(data.stats.find(s => s.stats.name === "special-attack").base_stat);
      setSpecialDefense(data.stats.find(s => s.stats.name === "special-defense").base_stat);
      setSpeed(data.stats.find(s => s.stats.name === "speed").base_stat);
    } catch (err) {
      console.error(err);
    }
  };

  const onEnter = (event) => {
    if (event.key === 'Enter') {
      getPokemonImage(inputName);
    }
  }

  return (
    <>
     <div className="main-content" id="play-content">

  {/* LEFT SIDE — SEARCH ABOVE, MOVES BELOW */}
  <div className="left-side">

    <div className="top-section">
      <input
        className="input-pokemon"
        placeholder="Pokemon Name"
        value={inputName}
        onChange={(event) => setInputName(event.target.value)}
        onKeyDown={onEnter}
      />
    </div>

    <div className="container-moves">
  {[0, 1, 2, 3].map(i => (
    <MoveInput
      key={i}
      index={i}
      allMoves={moves}
      activeIndex={activeMoveIndex}
      setActiveIndex={setActiveMoveIndex}
    />
  ))}
</div>

  </div>

  {/* RIGHT SIDE — TYPING + IMAGE */}
  <div className="right-side"> 
     <input
      className="input-type"
      value={type}
      placeholder="Type"
      disabled
      readOnly
    />

    <div className="image-wrapper">
      <img src={img} className="image-pokemon" />
    </div>
  </div>
</div>
    </>
  );
}