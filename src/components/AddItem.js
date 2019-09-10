import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'


const mapDispatchToProps = (dispatch) => ({
    add: (input) => dispatch(addTodo(input))
})

const AddItem = (props) => {
    let input

    return (
        <div>
            <input 
                type='text' 
                ref={(node) => input = node}
            />
            <button onClick={() => {
                input.value.trim() && props.add(input.value.trim())
                input.value = ''
            }}>add</button>
        </div>
    )
}

export default connect(null, mapDispatchToProps)(AddItem)