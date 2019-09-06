import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let input

const mapStateToProps = (state) => ({
    todos: state
})

const mapDispatchToProps = (dispatch) => ({
    add: addTodo(input.value)
})

const AddItem = () => {
   


    return (
        <div>
            <input type='text' ref={(node) => input = node}/>
            <button onClick={() => add}>add</button>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(AddItem)