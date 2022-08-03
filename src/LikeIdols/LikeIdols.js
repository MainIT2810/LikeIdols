import React, { Component } from 'react'
import IdolsList from './IdolsList'
import IdolsProfile from './IdolsProfile'
import IdolsProvider from './_Provider/IdolsProvider'

export default class LikeIdols extends Component {
  render() {
    return (
      <IdolsProvider>
        <div className="container">
          <IdolsProfile/>
          <IdolsList/>
        </div>
      </IdolsProvider>
    )
  }
}
