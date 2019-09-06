import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const mapStateToProps = (state) => ({
    todos: state
})

const mapDispatchToProps = (dispatch) => ({
    add: (input) => dispatch(addTodo(input.value))
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
                props.add(input)
                input.value = ''
            }}>add</button>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(AddItem)