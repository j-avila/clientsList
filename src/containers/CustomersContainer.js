import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
// import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {fetchCustomers} from '../actions/fetchCustomers'
import AppFrame from '../components/appFrame'
import CustomersList from '../components/customersList'
import CustomerActions from '../components/customerAction'
import { getCustomers } from '../selectors/customers'

class CustomersContainer extends Component {
 /*  static propTypes = {
    prop: PropTypes
  } */

  handleANew = () => {
    this.props.history.push('/customers/new')
  }

  componentDidMount() {
    this.props.customers.length === 0 &&
      this.props.fetchCustomers()
  }
  

  renderBody = customers => (
    <div>
       <CustomersList 
        customers={customers} 
        urlPath={'customers/'}
      />
      <CustomerActions>
        <button onClick={this.handleANew}>nuevo</button>
      </CustomerActions>
    </div>
  )

  render() {
    return (
      <div>
        <AppFrame 
          header="listado de clientes"
          body={
            this.renderBody(this.props.customers)
          }
        />
      </div>
    )
  }
}

const mapDispatchToProps = {
  fetchCustomers
}

const mapStateToProps = state => ({
  customers: getCustomers(state)
})

CustomersContainer.defaultProps = {

 customers: []

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CustomersContainer))
