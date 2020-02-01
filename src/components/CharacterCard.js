import React from "react";
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid black;
  margin: 2%;
  text-align: center;
`;

export default function CharacterCard(props) {
  return (
    <Card>
      <h4>{props.character.name}</h4>
      <p>Status: {props.character.status}</p>
      <p>Gender: {props.character.gender}</p>
      <p>Location: {props.character.location.name}</p>
    </Card>
  )
}
