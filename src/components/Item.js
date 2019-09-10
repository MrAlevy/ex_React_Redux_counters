import React from 'react'
import { connect } from 'react-redux'
import { toggleTodo, delTodo } from '../actions'


const mapDispatchToProps = dispatch => ({
    toggleItem: (id) => dispatch(toggleTodo(id)),
    delItem: (id) => dispatch(delTodo(id))
})

const Item = (props) => {
    return (
        <div 
            style={props.isChecked ? 
                {color: 'lightgray'} : 
                {color: 'black'}}
        >
            <input 
                type='checkbox'
                checked={props.isChecked} 
                onChange={() => props.toggleItem(props.item.id)}
            />
            {props.item.text}
            <button 
                onClick={() => props.delItem(props.item.id)}
            >
                del
            </button>
            <br/>
        </div>
    )
}

export default connect(null, mapDispatchToProps)(Item)