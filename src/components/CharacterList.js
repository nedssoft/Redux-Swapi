import React from "react";

import Character from "./Character";

const CharacterList = props => {
  return (
    <div className="character-list">
    <ul>
      {props.characters.map(character => {
        return <Character key={character.name} character={character} />;
      })}
    </ul>
     <div className="controls">
      <button onClick={()=> props.fetchCharacters(props.prev)}>Prev</button>
      <button onClick={()=> props.fetchCharacters(props.next)}>Next</button>
     </div>
    </div>
  );
};

export default CharacterList;
