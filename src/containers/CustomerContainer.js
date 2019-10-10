import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchCustomers } from '../actions/fetchCustomers'
import AppFrame from '../components/appFrame'
import { getCustomerByDni } from '../selectors/customers'
import CustomerData from '../components/customerData'
import CustomerEdit from '../components/customerEdit'

class CustomerContainer extends Component {

  componentDidMount() {
    !this.props.customer && this.props.fetchCustomers()
  }

  handleSubmit = values => {
    console.log(JSON.stringify(values))

  }

  handleOnBack = () => {
    this.props.history.goBack()
  }

  renderBody = () => (
    <Route path="/customers/:dni/edit"
      children={
        ({match}) => {
          const CustomerControl = match ? CustomerEdit : CustomerData
          return <CustomerControl 
                  {...this.props.customer}
                  onSubmit={this.handleSubmit}
                  onBack={this.handleOnBack}
                />
        }
      }
    />
  )

  render() {
    const {dni} = this.props
    return (
      <div>
        <AppFrame
          header={`Cliente: ${dni}`}
          body={ this.renderBody() }
        />
      </div>
    )
  }
}

const mapStateToprops = (state, props) =>({
  customer: getCustomerByDni(state, props)
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators ({
    fetchCustomers
  }, dispatch)
}

export default withRouter(connect(mapStateToprops, mapDispatchToProps)(CustomerContainer))
