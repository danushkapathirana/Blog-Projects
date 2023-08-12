import React, { useReducer } from "react"

import classes from "./Counter.module.css"

const ReducerCounter = () => {
    const initialState = {
        counter: 0
    }

    const reducer = (state, action) => {
        switch(action.type) {
            case "INCREMENT":
                return {counter: state.counter + 1}
            case "DECREMENT":
                return {counter: state.counter -1}
        }
    }

    const [state, dispatchFun] = useReducer(reducer, initialState)

    return(
        <div className={classes.wrapper}>
            <h1>{state.counter}</h1>
            <div className={classes.action_buttons__wrapper}>
                <button onClick={() => {dispatchFun({type : "INCREMENT"})}}>+</button>
                <button onClick={() => {dispatchFun({type : "DECREMENT"})}}>-</button>
            </div>
        </div>
    )
}

export default ReducerCounter
