import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchCustomers } from '../actions/fetchCustomers'
import { updateCustomer } from '../actions/updateCustomer'
// import { SubmissionError } from 'redux-form'
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
    const {id} = values
    return this.props.updateCustomer(id, values)
    /* .then( r => {
      if(r.error){
        throw new SubmissionError(r.payload)
      }
    }) */
  }  

  handleOnBack = () => {
    this.props.history.goBack()
  }

  handleSuccess = () => {
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
                  onSubmitSuccess={this.handleSuccess}
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
    fetchCustomers,
    updateCustomer
  }, dispatch)
}

export default withRouter(connect(mapStateToprops, mapDispatchToProps)(CustomerContainer))
