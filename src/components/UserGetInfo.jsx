import React from 'react'
import { useDispatch } from 'react-redux'
import { getUserByIdFetching } from '../actions'

export const UserGetInfo = () => {
    const dispatch = useDispatch()
    let input

    return (
        <div>
            <label htmlFor='userId'>enter user id (1-10): </label>
            <input ref={node => input = node} type='number' id='userId' min='1' max='10'/>
            <br />
            <button 
                onClick={() => dispatch(
                    getUserByIdFetching(`https://jsonplaceholder.typicode.com/users/${input.value}`)
                )}
            >get the user info</button>
        </div>
    )
}