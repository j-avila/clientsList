import {combineReducers} from 'redux'
import { customers } from './customers'
import { reducer as reduxForm} from 'redux-form'
import { CUSTOMER_VIEW, CUSTOMER_EDIT, CUSTOMER_LIST } from '../constants'

const user = (user, action) => ({
  permissions: [CUSTOMER_LIST, CUSTOMER_VIEW]
})

export default combineReducers({
  customers,
  form: reduxForm,
  user
})