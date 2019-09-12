import { 
    GET_USER_BY_ID_SUCCESS, 
    GET_USER_BY_ID_IS_LOADING, 
    GET_USER_BY_ID_ERROR 
} from '../constants/ActionTypes'


export const getUserByIdFetch = (id) => ({
    type: 'GET_USER_BY_ID_FETCH',
    id
})

export const getUserByIdSuccess = (userInfo) => ({
    type: GET_USER_BY_ID_SUCCESS,
    payload: userInfo
})

export const getUserByIdIsLoading = (bool) => ({
    type: GET_USER_BY_ID_IS_LOADING,
    isLoading: bool
})

export const getUserByIdError = (bool) => ({
    type: GET_USER_BY_ID_ERROR,
    error: bool
})

/* export const getUserByIdFetching = (url) => {
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
} */