import { combineReducers } from 'redux'
import { user, userIsLoading, userError } from './user'

export default combineReducers({
    user,
    userIsLoading,
    userError
})