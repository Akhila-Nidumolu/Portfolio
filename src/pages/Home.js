// src/pages/Home.js
import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  padding: 4rem;
  text-align: center;
`;

const Home = () => (
  <HomeContainer>
    <h1>Welcome to My Portfolio</h1>
    <p>I am a passionate developer focused on creating amazing projects.</p>
  </HomeContainer>
);

export default Home;
