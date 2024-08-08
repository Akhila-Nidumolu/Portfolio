// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background: rgba(255, 255, 255, 0.2);
  padding: 1rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 600;

  &:hover {
    color: #9B1C1C;
  }
`;

const Navbar = () => (
  <Nav>
    <StyledLink to="/">Home</StyledLink>
    <StyledLink to="/about">About</StyledLink>
    <StyledLink to="/projects">Projects</StyledLink>
    <StyledLink to="/skills">Skills</StyledLink>
    <StyledLink to="/contact">Contact</StyledLink>
  </Nav>
);

export default Navbar;
