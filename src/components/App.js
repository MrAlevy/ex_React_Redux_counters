import React from 'react';
import './App.css';
import {increment, decrement, plusVal} from '../actions'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {intValue: state} // intValue: state.firstReducer - если их несколько
}

/* const mapDispatchToProps = (dispatch) => {
  return {
    setValue: () => {
      dispatch({
        type: 'INC'
      })
    }
  }
} */

const mapDispatchToProps = dispatch => ({
    setValueInc: () => dispatch(increment()),  //  dispatch(plusVal(1))
    setValueDec: () => dispatch(decrement()),  //  dispatch(plusVal(-1))
    setValuePlusVal: (val) => dispatch(plusVal(val))
})

function App(props) {
  let input  // for ref
  return (
    <div className="App">
      <button onClick={() => props.setValueInc()}>inc</button>
      <button onClick={() => props.setValueDec()}>dec</button>
      <button onClick={() => props.setValuePlusVal(parseInt(input.value))}>plus value:</button>
      <input type='number' ref={node => input = node} defaultValue='0'/>
      <br />
      <span>result: </span>{props.intValue}
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

