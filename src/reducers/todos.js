import {
    ADD_TODO,
    DEL_TODO,
    TOGGLE_TODO
} from '../constants/ActionTypes' 

let uuidv4 = require('uuid/v4')

export const todos = (state=[], action) => {
    switch (action.type) {
        case ADD_TODO: 
            return [
                ...state,
                {
                    id: uuidv4(),
                    text: action.payload,
                    completed: false
                }
            ]
        case DEL_TODO:
            return state.filter(item => item.id !== action.id)
        case TOGGLE_TODO:
            return state.map(item => 
                item.id === action.id ? 
                {...item, completed: !item.completed} : 
                item
            )
        default:
            return state
    }
}