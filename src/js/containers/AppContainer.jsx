import React from 'react'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { devTools } from 'redux-devtools'
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import Layout from '../components/Layout'
import Root from './Root'
import * as reducers from '../reducers'

const finalCreateStore = compose(
  applyMiddleware(thunk),
  devTools(),
  createStore
)

const reducer = combineReducers(reducers)
const store = finalCreateStore(reducer)

export default class AppContainer extends React.Component{

  render(){
    return (
      <Layout {...this.props}>
        <Provider store={store}>
          { () => <Root {...this.props} />}
        </Provider>
        <DebugPanel top right bottom>
          <DevTools 
            store={store}
            monitor={LogMonitor}
          />
        </DebugPanel>
      </Layout>
    )
  }
}