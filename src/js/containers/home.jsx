import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Home extends Component{

  render(){
    return (
      <div>
        <h1>Welcome to Home: {this.props.title}</h1>
        <Link to="/about">Go About</Link>
      </div>
    )
  }
}