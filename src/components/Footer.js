// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  padding: 1rem;
  text-align: center;
  position: relative;
  width: 100%;
  bottom: 0;
`;

const Footer = () => (
  <FooterContainer>
    <p>© 2024 AKHILA NIDUMOLU. All rights reserved.</p>
  </FooterContainer>
);

export default Footer;
