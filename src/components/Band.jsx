import React from 'react'
import styled from 'styled-components'

const Band = ({ image, name, information }) => {
  return (
    <li>
      <BandName>{name}</BandName>
      <img src={image} alt={name} />
      <BandInfo>
        <p>{information}</p>
      </BandInfo>
    </li>
  )
}

export default Band
const BandName = styled.h1`
  font-size: 2.4rem;
  text-shadow: 0.05rem 0.05rem 0.05rem #fff;
`
const BandInfo = styled.div`
  width: 50%;

  p {
    color: #fff;
    font-size: 1.2rem;
    text-shadow: 0.2rem 0.2rem 0.2rem #000;
  }
`
