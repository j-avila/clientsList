import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchCustomers } from '../actions/fetchCustomers'
import { updateCustomer } from '../actions/updateCustomer'
import { deleteCustomer } from '../actions/deleteCustomer'
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

  handleDelete = (id) => {
    this.props.deleteCustomer(id).then(
      console.log(id),
      this.props.history.goBack()
    )
  }

  renderControl = (isEdit, isDelete) => {
    const CustomerControl = isEdit ? CustomerEdit : CustomerData
    return <CustomerControl 
            {...this.props.customer}
            onSubmit={this.handleSubmit}
            onSubmitSuccess={this.handleSuccess}
            onBack={this.handleOnBack}
            isDeleteAllow={!!isDelete}
            onDelete={this.handleDelete}
          />
  }

  renderBody = () => (
    <Route path="/customers/:dni/edit"
      children={
        ({ match: isEdit }) => (
          <Route path="/customers/:dni/del" children={
            ({ match: isDelete }) => (
              this.renderControl(isEdit, isDelete)
            )
          } />
        )
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
    updateCustomer,
    deleteCustomer
  }, dispatch)
}

export default withRouter(connect(mapStateToprops, mapDispatchToProps)(CustomerContainer))
