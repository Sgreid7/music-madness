import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import BandPage from './pages/BandPage'

const App = () => {
  return (
    <Router>
      <nav>
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
      </nav>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/:band" component={BandPage}></Route>
      </Switch>
    </Router>
  )
}

export default App
