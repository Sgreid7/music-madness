import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HomePage = () => {
  return (
    <section>
      <header>Welcome to Music Madness!</header>
      <p>My Top 3 Favorite Bands:</p>
      <ul>
        <li>
          <Link to="/btbam">Between the Buried and Me</Link>
        </li>
        <li>
          <Link to="/tool">TOOL</Link>
        </li>
        <li>
          <Link to="/periphery">Periphery</Link>
        </li>
      </ul>
      <p>
        These bands can loosely be grouped into one genre known as Progressive
        Metal
      </p>
    </section>
  )
}

export default HomePage
