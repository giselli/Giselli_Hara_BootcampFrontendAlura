import React from 'react';
import styled from 'styled-components';

const NavWrapper = styled.nav`
  display: flex;
  justify-content: flex-end;
  gap: 38px;
`;

const NavBar = () => (
    <NavWrapper>
        <a href='/sobre'>Sobre Mim</a>
        <a href='/contato'>Contato</a>
    </NavWrapper>
);

export default NavBar;
