import {CUSTOMER_LOG} from '../constants'
import { createAction } from 'redux-actions'
import {usersURL} from '../api/urls'
import { apiLogin } from '../api'

export const logService = createAction(CUSTOMER_LOG, active => apiLogin(usersURL, active))
