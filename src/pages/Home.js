import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'

import {
  Button
} from 'react-materialize'

import { colors, fonts, grid } from '../styles/settings/settings'


class Home extends Component {
  render() {
    return (
      <div>
        <section className={css(styles.container)}>
          <h2 className={css(styles.title)}>My Grocery List</h2>
          <h4 className={css(styles.subtitle)}>
            Ever came back from the grocery store only to find out that you forgot to buy a soap? Or milk? Say goodbye to that, My Grocery List is here
          </h4>
          <Button waves="light" node='a' href='/lists/new' className={css(styles.button)}>
            Get Started
          </Button>
        </section>
      </div>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    display: 'block',
    margin: '0 auto',
    paddingTop: grid.gutter.base,
    textAlign: 'center',
    width: '50%'
  },
  title: {
    color: colors.textPrimary,
    fontSize: fonts.sizes.title,
    fontWeight: fonts.weight.bold,
    marginBottom: grid.gutter.base,
    marginTop: 0
  },
  subtitle: {
    color: colors.textPrimary,
    fontSize: fonts.sizes.subtitle,
    fontWeight: fonts.weight.light,
    marginBottom: grid.gutter.base,
    marginTop: 0
  },
  button: {
    backgroundColor: colors.primaryDark
  }
})

export default Home
