import React from 'react';
import styled from 'styled-components';

const NavWrapper = styled.nav`
  display: flex;
  justify-content: flex-end;
  gap: 38px;
  font-size: 36px;
 `;

const NavBar = () => (
  <NavWrapper>
    <a href="https://gi.dev.br" className="mim">Sobre Mim</a>
    <a href="mailto:gi@hara.ninja" className="mim">Contato</a>
  </NavWrapper>
);

export default NavBar;
