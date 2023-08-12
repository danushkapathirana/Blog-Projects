import React, { Fragment } from "react"

import StateCounter from "./StateCounter"
import ReducerCounter from "./ReducerCounter"

const App = () => {
    return(
        <Fragment>
            <StateCounter />
            {/* <ReducerCounter /> */}
        </Fragment>
    )
}

export default App


/**
 * here, you can comment and uncomment line 9 & 10
 * to see how the useState and useReducer Hooks works respectively
 */
