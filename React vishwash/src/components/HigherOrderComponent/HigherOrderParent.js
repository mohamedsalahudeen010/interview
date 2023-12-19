import React, { Component } from 'react'
import ClickCount from './Without HOC/ClickCount'
import HoverCount from './Without HOC/hoverCount'
import OnKeyUpCounter from './Without HOC/OnKeyUpCounter'

class HigherOrderParent extends Component {
  render() {
    return (
      <div>
        <ClickCount/>
        <HoverCount/>
        <OnKeyUpCounter/>
      </div>
    )
  }
}

export default HigherOrderParent