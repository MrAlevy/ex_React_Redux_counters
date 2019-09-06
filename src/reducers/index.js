export const rootReducer = (state=0, action) => {
    switch (action.type) {
        case ('INC'): 
            return state + 1
        case ('DEC'):
            return state - 1
        case ('PLUS_VAL'):
            return state + action.payload
        default: 
            return state
    }
}