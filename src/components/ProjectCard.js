// src/components/ProjectCard.js
import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ccc;
  padding: 1rem;
  margin: 1rem;
  border-radius: 8px;
  background-color: #fff;
`;

const ProjectCard = ({ title, description }) => (
  <Card>
    <h2>{title}</h2>
    <p>{description}</p>
  </Card>
);

export default ProjectCard;
