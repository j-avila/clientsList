import React, { Component } from 'react'
import { connect } from 'react-redux'

export const accessControl = permissionsRequired => WrappedComponent => {
  const SecuredControl = class extends Component {
    render(){
      const { permissions } = this.props.userActive[0]
      const isAllow = permissionsRequired.every(p => permissions.indexOf(p) >= 0)

      return(
          !isAllow ? 
          <div><i>No tienes permisos de acceso</i></div>
          : <WrappedComponent {...this.props} />
      )
      
    }
  }
  return  connect(state => ({userActive: state.userActive}))(SecuredControl)
}