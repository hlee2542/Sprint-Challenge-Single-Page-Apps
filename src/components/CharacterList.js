import React, { useEffect, useState } from "react";
import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';

export default function CharacterList() {
  let [characters, setCharacters] = useState([]);
  let [query, setQuery] = useState('');
  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
      .then(res => res.json())
        .then(data => setCharacters(data.results));
  }, []);

  return (
    <section className="character-list">
      <h2 className="list-title">Character List</h2>
      <SearchForm query={query} setQuery={setQuery}/>
      <div>{
        characters.length ? 
          query.length !== 0 ?
          characters.filter(character => character.name.includes(query)).map(character => <CharacterCard character={character} />)
          : characters.map(character => <CharacterCard character={character} />) 
        : 'Loading...'}
      </div>
    </section>
  );
}
