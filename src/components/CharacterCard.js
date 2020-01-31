import React from "react";

export default function CharacterCard(props) {
  return (
    <div>
      <h4>{props.character.name}</h4>
      <p>Status: {props.character.status}</p>
      <p>Gender: {props.character.gender}</p>
      <p>Location: {props.character.location.name}</p>
    </div>
  )
}
