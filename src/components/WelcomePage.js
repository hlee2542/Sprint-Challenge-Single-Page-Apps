import React from "react";
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const ListLink = styled.div`
  text-align: center;
  margin-top: 5%;
`;

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
        <Link to='/characters'>
          <ListLink>
            Characters
          </ListLink>
        </Link>
      </header>
    </section>
  );
}
