import React from 'react'
import styled from 'styled-components'

const CapaSite = styled.div`
height: 100vh;
color: ${({ theme }) => theme.colors.black};
font-family: 'Fira Sans Condensed', sans-serif;
text-align: center;
position: relative;
overflow: hidden;

.capa-title {
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
}

h1 {
font-weight: 400;
font-size: 90px;
margin-bottom: 1rem;
}

p {
font-family: 'Fira Sans Condensed';
font-style: normal;
font-weight: 300;
font-size: 48px;
margin: 0;
}
`




export default function Capa() {
  return (
  <CapaSite>
  <div className='capa-title'>
  <h1>Giselli Hara</h1>
  <p>Meu portfólio</p>
  </div>
  </CapaSite>
  )
  }
  
  
  
  