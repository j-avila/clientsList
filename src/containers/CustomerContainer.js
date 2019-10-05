import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import AppFrame from '../components/appFrame'
import { getCustomerByDni } from '../selectors/customers'
import CustomerData from '../components/customerData'
import CustomerEdit from '../components/customerEdit'

class CustomerContainer extends Component {

  handleSubmit = values => {
    console.log(JSON.stringify(values))
  }

  renderBody = () => (
    <Route
      path="/customers/:dni/edit"
      children={
        ({match}) => {
          const CustomerControllers = match ? CustomerEdit : CustomerData
          return <CustomerControllers {...this.props.customer} onSubmit={this.handleSubmit}/>
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

export default connect(mapStateToprops, null)(CustomerContainer)
