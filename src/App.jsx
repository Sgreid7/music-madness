import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import BandPage from './pages/BandPage'
import styled from 'styled-components'

const App = () => {
  return (
    <Router>
      <Nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
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
      </Nav>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/:band" component={BandPage}></Route>
      </Switch>
    </Router>
  )
}

export default App
const Nav = styled.nav`
  display: flex;
  ul {
    display: flex;
    justify-content: center;
    list-style: none;
    width: 100%;
    border-bottom: 0.2rem solid #c0c0c0;
  }

  li {
    padding: 0.5rem;
    margin: 0.5rem;
    justify-content: center;
    color: #000;
    text-decoration: none;
    transition: 0.3s ease;
  }

  a {
    text-decoration: none;
    color: #fff;
    font-size: 1.2rem;
    text-shadow: 0.25rem 0.25rem 0.25rem #000;
    :active {
      color: red;
    }
  }
`
