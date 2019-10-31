import {combineReducers} from 'redux'
import { handleActions } from 'redux-actions'
import { customers } from './customers'
import { reducer as reduxForm} from 'redux-form'
import { CUSTOMER_LOG } from '../constants/index'

const userActive = handleActions({
  [CUSTOMER_LOG]: (state, action) => [...action.payload]
  // permissions: [CUSTOMER_LIST, CUSTOMER_VIEW, CUSTOMER_EDIT],
  
},[])

export default combineReducers({
  customers,
  form: reduxForm,
  userActive
})