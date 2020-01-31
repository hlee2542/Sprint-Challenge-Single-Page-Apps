import React from "react";

export default function SearchForm(props) {
  return (
    <section className="search-form">
     <form>
       <input type='text' placeholder="Type in a character's name." value={props.query} onChange={event => props.setQuery(event.target.value)}/>
     </form>
    </section>
  );
}
