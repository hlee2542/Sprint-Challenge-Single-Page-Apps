import React from "react";
import styled from 'styled-components';

const SearchBar = styled.input`
  display: block;
  margin: 0% auto;
`;

export default function SearchForm(props) {
  return (
    <section className="search-form">
     <form>
       <SearchBar type='text' placeholder="Type in a character's name." value={props.query} onChange={event => props.setQuery(event.target.value)}/>
     </form>
    </section>
  );
}
