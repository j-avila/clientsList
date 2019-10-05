import React, { Component } from 'react'
import AppFrame from '../components/appFrame'
import CustomerActions from '../components/customerAction'

export default class HomeContainer extends Component {

  handleClick = () => {
    this.props.history.push('/customers')
  }

  render() {
    return (
      <div>
        <AppFrame 
          header="home"
          body={
            <div>
              esta es la pantalla inicial
              <CustomerActions>
                <button onClick={this.handleClick} >
                  Lista de clientes
                </button>
              </CustomerActions>
            </div>
          }
        />
      </div>
    )
  }
}
