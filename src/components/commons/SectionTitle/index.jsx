import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SectionTitleWrapper = styled.h1`
margin-top: 64px;
margin-bottom: 85px;
font-family: 'Fira Sans Condensed';
font-style: normal;
font-weight: 400;
font-size: 64px;
text-align: center;
color: #000000;
width: 100%;
`;

export default function SectionTitle({ title }) {
  return <SectionTitleWrapper>{title}</SectionTitleWrapper>;
}

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
