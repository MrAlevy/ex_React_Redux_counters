import { put, call, takeEvery } from 'redux-saga/effects'

import {
    getUserByIdSuccess,
    getUserByIdIsLoading,
    getUserByIdError 
} from '../actions'

export function* watchGetUserById() {
    yield takeEvery('GET_USER_BY_ID_FETCH', getUserByIdFetchAsync)
}

function* getUserByIdFetchAsync(action) {
    try {
        yield put(getUserByIdError(false))
        yield put(getUserByIdIsLoading(true))
        const userInfo = yield call(async () => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/users/${action.id}`)
            return res.json()
        })
        if (Object.entries(userInfo).length === 0 && userInfo.constructor === Object) { yield put(getUserByIdError(true)) }
        yield put(getUserByIdIsLoading(false))
        yield put(getUserByIdSuccess(userInfo))
    } catch (err) {
        console.log(err)
        yield put(getUserByIdError(true))
    }
}