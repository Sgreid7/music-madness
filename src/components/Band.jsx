import React from 'react'

const Band = ({ image, name, information }) => {
  return (
    <li>
      <h1>{name}</h1>
      <img src={image} alt={name} />
      <p>{information}</p>
    </li>
  )
}

export default Band
