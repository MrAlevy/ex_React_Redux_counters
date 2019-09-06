import {
    ADD_TODO,
    DEL_TODO,
    TOGGLE_TODO
} from '../constants/ActionTypes'

export const addTodo = (text) => ({
    type: ADD_TODO,
    payload: text
})

export const delTodo = (id) => ({
    type: DEL_TODO,
    id
})

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id
})