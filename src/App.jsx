import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import BTBAM from './pages/BTBAM'
import TOOL from './pages/TOOL'
import Periphery from './pages/Periphery'
import HomePage from './pages/HomePage'

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
        <Route exact path="/btbam" component={BTBAM}></Route>
        <Route exact path="/tool" component={TOOL}></Route>
        <Route exact path="/periphery" component={Periphery}></Route>
      </Switch>
    </Router>
  )
}

export default App
