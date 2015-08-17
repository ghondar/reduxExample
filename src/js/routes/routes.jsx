import React from 'react'
import { Route, DefaultRoute, NotFoundRoute } from 'react-router'
import AppContainer from '../containers/AppContainer'
import Home from '../containers/home'
import About from '../containers/about'
import ErrorHandler from '../containers/error'

export default (
  <Route path="/" handler={AppContainer} >
    <DefaultRoute handler={Home}/>
    <Route name="/about" handler={About}/>
    <NotFoundRoute handler={ErrorHandler} />
  </Route>
)
