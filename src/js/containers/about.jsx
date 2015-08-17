import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'


@connect()
export default class Home extends Component{

  static contextTypes = {
    router: PropTypes.func
  }

  render(){
    return (
      <div>
        <h1>Welcome to About: {this.props.user}</h1>
        <button onClick={::this._handleReturn}>Back to Home</button>
      </div>
    )
  }
  _handleReturn(e){
    const { router } = this.context
    router.replaceWith('/')
  }
}