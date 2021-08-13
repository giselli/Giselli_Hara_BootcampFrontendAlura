import React from 'react';
import styled from 'styled-components';


const LogoWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.main.color};
  width: fit-content;
  height: 100%;
`;

const Logo = () => (
    <LogoWrapper>
        <a href='/'>&lt;me /&gt;</a>
    </LogoWrapper>
);

export default Logo;
