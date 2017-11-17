import React, { Component } from 'react'
import Notifications from 'react-notification-system-redux'
import {connect} from 'react-redux'
import {
  Navbar,
  NavItem
} from 'react-materialize'


import Main from './Main'

import navbar from './styles/navbar.module.css'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar className={navbar.default} brand="My Grocery List" right>
          <NavItem href="/criar">New List</NavItem>
        </Navbar>
        <Notifications notifications={this.props.notifications}/>
        <Main />
      </div>
    )
  }
}

export default connect((state) => ({notifications: state.notifications}))(App)
