import React, { useState } from "react"

import classes from "./Counter.module.css"

const StateCounter = () => {
    const [counter, setCounter] = useState(0)

    const incrementHandler = () => {
        setCounter((prevState) => {
            return ++prevState
        })
    }

    const decrementHandler = () => {
        setCounter((prevState) => {
            return --prevState
        })
    }

    return(
        <div className={classes.wrapper}>
            <h1>{counter}</h1>
            <div className={classes.action_buttons__wrapper}>
                <button onClick={incrementHandler}>+</button>
                <button onClick={decrementHandler}>-</button>
            </div>
        </div>
    )
}

export default StateCounter


/**
 * here, in this example we change the one single state (counter)
 * using multiple ways (incrementHandler() & decrementHandler())
 * 
 * for this kind of cases, we can use useReducer()
 * 
 * refer the "ReducerCounter.js" file for the example code
 */
