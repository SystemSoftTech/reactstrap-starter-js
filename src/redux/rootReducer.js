// ** Reducers Imports
import navbar from './navbar'
import layout from './layout'
import auth from './authentication'
import calendar from '@src/views/pages/examples/Calendar/store'

const rootReducer = {
  calendar,
  auth,
  navbar,
  layout
}

export default rootReducer
