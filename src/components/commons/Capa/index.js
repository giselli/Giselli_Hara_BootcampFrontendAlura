import React from 'react'
import styled from 'styled-components'
//import img from '../../../../public/images/image4.jpg'


const CapaSite = styled.div`
height: 70vh;
color: #FFFFFF;
background-size: contain;

background-image: 
url("https://scontent.fmii1-1.fna.fbcdn.net/v/t1.6435-9/s960x960/225444527_10227702713379184_2339933207290010152_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeGQra5UidD7fmmm-OfoX37gnPqx8N1XCuic-rHw3VcK6NmB_xOUzrgNUdHvdZaNXps&_nc_ohc=r93Z66VvRlwAX90Jmfs&_nc_ht=scontent.fmii1-1.fna&oh=331c3da66bcc5d5fbfe41d913f26e185&oe=613CB5BA");


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
  
  
  
  