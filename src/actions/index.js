import { 
    GET_USER_BY_ID_SUCCESS, 
    GET_USER_BY_ID_IS_LOADING, 
    GET_USER_BY_ID_ERROR 
} from '../constants/ActionTypes'

const getUserById = (userInfo) => ({
    type: GET_USER_BY_ID_SUCCESS,
    payload: userInfo
})

const getUserByIdIsLoading = (bool) => ({
    type: GET_USER_BY_ID_IS_LOADING,
    isLoading: bool
})

const getUserByIdError = (bool) => ({
    type: GET_USER_BY_ID_ERROR,
    error: bool
})

export const getUserByIdFetching = (url) => {
    return (dispatch) => {
        dispatch(getUserByIdError(false))
        dispatch(getUserByIdIsLoading(true))

        fetch(url)
            .then(res => {
                if (!res.ok) {dispatch(getUserByIdError(true))}
                return res.json()
            })
            .then(json => {
                dispatch(getUserById(json))
                dispatch(getUserByIdIsLoading(false))
            })
            .catch(() => dispatch(getUserByIdError(true)))
    }
}