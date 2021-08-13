import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

const CardWrapper = styled.div`
  height: ${props => '450px'};
  width: ${props => '288px'};
  border: 1px solid ${({ theme }) => theme.colors.borders.color};
  box-sizing: border-box;
  margin-bottom: 30px;
  cursor: pointer;
  transition: box-shadow 0.3s;
  overflow: hidden;
`

const CardImageWrapper = styled.div`
  width: ${props => '286px'};
  height: ${props => '390px'};
  background-image: url(${props => props.image || 'https://placeholder.com/287x390'});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  .featured {
    position: absolute;
    width: 228px;
    height: 48px;
    left: 10px;
    top: 10px;
    background: #ffffff;
    border: 1px solid #000000;
    box-sizing: border-box;

    font-weight: 300;
    font-size: 38px;
    line-height: 46px;
    text-align: center;
  }
`
const CardTitleWrapper = styled.div`
  height: ${props => '60px'};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;

  h2 {
    margin: 0;
    font-family: 'Fira Sans Condensed';
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    color: #000000;
  }
`


export default function Card(props) {
    const { image, title, text, url, featured } = props
    return (
        <>
        <CardWrapper featured={featured}>
            <a href={url}>
            <CardImageWrapper image={image} featured={featured}>
                <div>{text}</div>
            </CardImageWrapper>
            <CardTitleWrapper featured={featured}>
                <h2>{title}</h2>
            </CardTitleWrapper>
            </a>
        </CardWrapper>
      </>
    )
}

Card.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string,
    url: PropTypes.string.isRequired,
  }
  
  Card.defaultProps = {
    text: ''
  }