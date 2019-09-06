export const increment = () => ({type: 'INC'})
export const decrement = () => ({type: 'DEC'})
export const plusVal = (val) => ({
    type: 'PLUS_VAL',
    payload: val
})