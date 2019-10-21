import {FETCH_CUSTOMERS} from '../constants'
import { createAction } from 'redux-actions'
import { apiGet } from '../api'
import { customersURL } from '../api/urls'

export const fetchCustomers = createAction(FETCH_CUSTOMERS, apiGet(customersURL))
