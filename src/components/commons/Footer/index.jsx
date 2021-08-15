import React from 'react';
import styled from 'styled-components';
import FooterIcon from '../FooterIcones';

const FooterWrapper = styled.div`
  height: 68px;
  background-color: #000000;
  display: flex;
  justify-content: center;

  .social {
    width: 224px;
    height: 100%;
    background-color: #FFFFFF;
    align-items: center;
    display: flex;
    justify-content: space-around;
  }
`;

export default function Footer() {
  const socialIcon = [
    {
      image: 'icons/twitter.svg',
      alt: 'Twitter imagem',
      url: 'https://twitter.com/pyrostegia',
    },
    {
      image: 'icons/github.svg',
      alt: 'Github imagem',
      url: 'https://github.com/giselli',
    },
    {
      image: 'icons/linkedin.svg',
      alt: 'Linkedin imagem',
      url: 'https://linkedin.com/in/giselli-hara/',
    },
  ];
  return (
    <FooterWrapper>
      <div className="social">
        {socialIcon.map((midia) => (
          <FooterIcon
            image={midia.image}
            alt={midia.alt}
            url={midia.url}
          />
        ))}
      </div>
    </FooterWrapper>
  );
}
