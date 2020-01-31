import React, { useEffect, useState } from "react";
import CharacterCard from './CharacterCard';

export default function CharacterList() {
  let [characters, setCharacters] = useState([]);
  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
      .then(res => res.json())
        .then(data => setCharacters(data.results));
  }, []);

  return (
    <section className="character-list">
      <h2>Character List</h2>
      <div>{characters.length ? characters.map(character => <CharacterCard character={character} />) : 'Loading...'}</div>
    </section>
  );
}
