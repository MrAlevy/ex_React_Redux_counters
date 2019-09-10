import React from 'react'
import { useDispatch } from 'react-redux'

export const Filter = () => {
    const dispatch = useDispatch()

    const handleChange = (e) => {
        dispatch({type: e.target.value})
    }

    return (
        <div>
            <hr />

            <input type='radio' name='filter' id='all' value='ALL' defaultChecked='true'
                onChange={(e) => handleChange(e)}
            /> 
            <label htmlFor='all'>all</label> 
            <br /> 

            <input type='radio' name='filter' id='finish' value='FINISH'
                onChange={(e) => handleChange(e)}
            /> 
            <label htmlFor='finish'>finish</label> 
            <br />

            <input type='radio' name='filter' id='notFinish' value='NOT_FINISH'
                onChange={(e) => handleChange(e)}
            /> 
            <label htmlFor='notFinish'>not finish</label> 
            <br />
            <hr />
            <br />
        </div>
    )
}


