import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <section>
      <header>Welcome to Music Madness!</header>
      <p>My Top 3 Favorite Bands:</p>
      <ul>
        <li>Between the Buried and Me</li>
        <li>TOOL</li>
        <li>Periphery</li>
      </ul>
      <p>
        These bands can loosely be grouped into one genre known as Progressive
        Metal
      </p>
    </section>
  )
}

export default HomePage
