import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
// import Image from './concert.jpg'

const HomePage = () => {
  return (
    <HomeSection>
      <header>Welcome to Music Madness!</header>
      <p>My Top 3 Favorite Bands:</p>
      <ul>
        <li>
          <Link to="/tool">TOOL</Link>
        </li>
        <li>
          <Link to="/btbam">Between the Buried and Me</Link>
        </li>
        <li>
          <Link to="/periphery">Periphery</Link>
        </li>
      </ul>
      <p>Genre: Progressive Metal</p>
    </HomeSection>
  )
}

export default HomePage
const HomeSection = styled.section`
  font-size: 2rem;
  color: #fff;
  text-shadow: 0.25rem 0.25rem 0.25rem #000;
  ul {
    display: flex;
    justify-content: center;
    list-style: none;
    width: 100%;
  }

  li {
    padding: 0.5rem;
    margin: 0.5rem;
    justify-content: center;
    color: #000;
    text-decoration: none;
    position: relative;
  }

  li::before,
  li::after {
    content: '';
    height: 1rem;
    width: 1rem;
    position: absolute;
    transition: all 0.35s ease;
    opacity: 0;
  }

  li::before {
    content: '';
    right: 0;
    top: 0;
    border-top: 0.15rem solid #007285;
    border-right: 0.15rem solid #3e95a8;
    transform: translate(-100%, 50%);
  }

  li:after {
    content: '';
    left: 0;
    bottom: 0;
    border-bottom: 0.15rem solid #fff;
    border-left: 0.15rem solid #fff;
    transform: translate(100%, -50%);
  }

  li:hover:before,
  li:hover:after {
    transform: translate(0, 0);
    opacity: 1;
  }

  a {
    text-decoration: none;
  }

  a {
    color #fff;
    font-style: italic;
  }
`
