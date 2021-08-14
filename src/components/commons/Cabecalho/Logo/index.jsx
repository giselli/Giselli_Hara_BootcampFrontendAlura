import React from 'react';
import styled from 'styled-components';

const LogoWrapper = styled.div`
background-color: #EEEEEE;
width: fit-content;
height: 100%;
font-size: 32px;
`;

const Logo = () => (
  <LogoWrapper>
    <a href="/">&lt;ME /&gt;</a>
  </LogoWrapper>
);

export default Logo;
