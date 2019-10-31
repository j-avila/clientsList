import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import AppFrame from '../components/appFrame'
import { logService } from '../actions/usersLogin'
import LoginForm from '../components/LoginForm'
import CustomerActions from '../components/customerAction'

class HomeContainer extends Component {

  handleClick = () => {
    this.props.history.push('/customers')
  }

  handleSubmit = values => {
    this.props.logService(values)
  }

  render() {
    const active = this.props.userActive ? {...this.props.userActive[0]} : []

    console.log(active)
    return (
      <div>
        <AppFrame 
          header="home"
          body={
            <div className="homepage">
              esta es la pantalla inicial
              {!active.user &&
                <LoginForm
                  onSubmit={this.handleSubmit}
                />
              }
              <CustomerActions>
               {active.user &&
                <button onClick={this.handleClick} >
                  Lista de clientes
                </button>
                }
              </CustomerActions>
            </div>
          }
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state,
  userActive: state.userActive
})

const mapDisatchToProps = dispatch => {
  return bindActionCreators({
    logService
  }, dispatch)
}

export default connect(mapStateToProps, mapDisatchToProps)(HomeContainer) 