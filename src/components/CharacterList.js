import React from "react";
import Character from "./Character";

const CharacterList = props => {
  return (
    <div className="character-list">
    <h1> StarWall Character List</h1>
    <ul>
      {props.characters.map(character => {
        return <Character key={character.name} character={character} />;
      })}
    </ul>
     <div className="controls">
      <button disabled={!props.prev} onClick={()=> props.fetchCharacters(props.prev)}>Prev</button>
      <button disabled={!props.next} onClick={()=> props.fetchCharacters(props.next)}>Next</button>
     </div>
    </div>
  );
};

export default CharacterList;
