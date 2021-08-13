import React from 'react'
import PropTypes from 'prop-types'

export default function FooterIcon({ image, alt, url }) {
  return (
    <a href={url} target='_blank' rel='noreferrer'>
      <img src={image} alt={alt} style={{ width: '32px', height: '32px' }} />
    </a>
  )
}

FooterIcon.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}
