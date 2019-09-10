import React from 'react'
import { connect } from 'react-redux'
import Item from './Item'


const mapStateToProps = (state) => ({
    todos: state.todos,
    filter: state.filter
})

const ItemsList = (props) => {

    const itemList = props.todos.map(e => {
        const item = <Item key={e.id} item={e} isChecked={e.completed}/>
        switch (true) {
            case props.filter === 'all':
                return item
            case props.filter ==='finish' && e.completed:
                return item
            case props.filter ==='notFinish' && !e.completed:
                return item             
        }
    })

    return (
        <div>
            {itemList}
        </div>
    )
}

export default connect(mapStateToProps)(ItemsList)