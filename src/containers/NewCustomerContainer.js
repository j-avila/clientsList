import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import AppFrame from '../components/appFrame'
import CustomerEdit from '../components/customerEdit'
import { withRouter } from 'react-router'
import { insertCustomer } from '../actions/insertCustomer'

class NewCustomerContainer extends Component {

  handleSubmit = values => {
    console.log(JSON.stringify(values))
    return this.props.insertCustomer(values)
  }
  handleSuccess = () => {
    this.props.history.goBack()
  }
  handleOnBack = () => {
    this.props.history.goBack()
  }

  renderBody = () => {
    return <CustomerEdit 
    onSubmit={this.handleSubmit}
    onSubmitSuccess={this.handleSuccess}
    onBack={this.handleOnBack} />
  }

  render() {
    return (
      <div>
        <AppFrame
          header={`crear nuevo cliente`}
          body={this.renderBody()}
        />
      </div>
    )
  }
}

const mapDispatchToprops = dispatch => {
  return bindActionCreators({
    insertCustomer
  }, dispatch)
}

export default withRouter(connect(null, mapDispatchToprops)(NewCustomerContainer))
