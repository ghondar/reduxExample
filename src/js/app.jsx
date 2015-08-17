import Client from 'react-engine/lib/client'
import Router from 'react-router'
import routes from './routes/routes'

const options = { 
  routes: routes,
  location: Router.HistoryLocation,
  viewResolver: function(viewName){
    return require('./containers/' + viewName)
  }
}

document.addEventListener('DOMContentLoaded', function onLoad() {
  Client.boot(options)
})