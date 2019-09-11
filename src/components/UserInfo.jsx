import React from 'react'
import { useSelector } from 'react-redux'

export const UserInfo = () => {
    const info = useSelector(state => state.user)
    const isLoading = useSelector(state => state.userIsLoading)
    const error = useSelector(state => state.userError)

    return isLoading
        ? <span>...loading</span>
        : error 
            ? <span>error!</span> 
            : <div>
                {info.name}
                <br/>
                {info.email}
            </div>
}