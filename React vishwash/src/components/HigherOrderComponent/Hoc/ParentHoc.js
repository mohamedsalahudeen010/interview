import React, { Component } from 'react'
import HoverCount from './HoverHOC'
import ClickCount from '../Hoc/ClickCountHOC'

export class ParentHoc extends Component {
  render() {
    return (
      <div>
        <HoverCount name="sala"/>
        <ClickCount name="mohamed"/>
      </div>
    )
  }
}

export default ParentHoc