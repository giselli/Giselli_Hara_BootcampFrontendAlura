import React from 'react';
import styled from 'styled-components';

const NavWrapper = styled.nav`
  display: flex;
  justify-content: flex-end;
  gap: 38px;
  font-size: 32px;
 `;

const NavBar = () => (
    <NavWrapper>
        <a href='https://gi.dev.br'>Sobre Mim</a>
        <a href='mailto:gi@hara.ninja'>Contato</a>
    </NavWrapper>
);

export default NavBar;
