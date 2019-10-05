import React, { Component } from 'react'

export const setPropsAsiInitial = WrappedComponent => (
  class extends Component {
    render(){
      return <WrappedComponent {...this.porps} initialValues={this.props} />
    }
  }
)