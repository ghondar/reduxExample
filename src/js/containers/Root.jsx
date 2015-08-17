import React from 'react'
import { RouteHandler } from 'react-router'
import { connect } from 'react-redux'
import { setUser } from '../actions/userActions'

@connect( state => ({
  user: state.user
}))
export default class Root extends React.Component{

  componentWillMount(){
    if(this.props.serverUser) {
      this.props.dispatch(setUser(this.props.serverUser))
    }
  }

  render(){
    const { user } = this.props
    return (
      <RouteHandler
        user={user}
      /> 
    )
  }
}
