import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import NavBar from './NavBar';

const CabecalhoWrapper = styled.div`
width: 100%;
height: 67px;
display: flex;
justify-content: space-around;
background-color: ${({ theme }) => theme.colors.secondary.main.color};
border-top: 1px solid ${({ theme }) => theme.colors.primary.main.color};
`

export default function Cabecalho() {
return (
<CabecalhoWrapper>
<Logo />
<NavBar />
</CabecalhoWrapper>
)
}

