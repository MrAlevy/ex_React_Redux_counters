import React from 'react'
import { useDispatch } from 'react-redux'
import { getUserByIdFetch } from '../actions'

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
                    getUserByIdFetch(input.value)
                )}
            >get the user info</button>
        </div>
    )
}