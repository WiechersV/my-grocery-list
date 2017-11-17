import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import CreateList from './pages/CreateList'

class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home}></Route>
        {/* <Route exact path="/lists" component={MyLists}></Route> */}
        <Route exact path="/lists/new" component={CreateList}></Route>
      </Switch>
    )
  }
}

export default Main
