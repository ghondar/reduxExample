import React from 'react'

const Estilos = {
  body: {
    backgroundColor: "#F1F1F1",
    padding: 0,
    margin: 0
  }
}

export default class Layout extends React.Component{

  render(){
    return (
      <html>
        <head>
          <meta charSet='utf-8'/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/> 
         
          <title>{this.props.title}</title>
        </head>
        <body style={Estilos.body}>
          {this.props.children}
        </body>
        <script src='http://localhost:8888/build/client.js' defer></script>
      </html>
    )
  }
}