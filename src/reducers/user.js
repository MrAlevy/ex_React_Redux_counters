import { 
    GET_USER_BY_ID_SUCCESS, 
    GET_USER_BY_ID_IS_LOADING, 
    GET_USER_BY_ID_ERROR 
} from '../constants/ActionTypes'

export const user = (state={}, action) => {
    switch (action.type) {
        case GET_USER_BY_ID_SUCCESS:
            return action.payload
        default:
            return state
    }
}

export const userIsLoading = (state=false, action) => {
    switch (action.type) {
        case GET_USER_BY_ID_IS_LOADING:
            return action.isLoading
        default:
            return state
    }
}

export const userError = (state=false, action) => {
    switch (action.type) {
        case GET_USER_BY_ID_ERROR:
            return action.error
        default:
            return state
    }
}