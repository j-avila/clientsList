import React, { Component } from 'react'

export const setPropsAsInitial = WrappedComponent => (
  class extends Component {
    render(){
      return <WrappedComponent 
                {...this.props} 
                initialValues={this.props} 
              enableReinitialize/> //este fuerza a retomar los datos despues del primer render
    }
  }
)
