// Row.jsx

import React from "react"
import Cell from "./Cell"

// Creates table row from JSON object
function Row (props) {
    return (
        <tr>
            {
                Object.keys(props.device).map((key) => {
                    return <Cell key={key} prop={props.device[key]} />
                })
            }
        </tr>
    )
}

export default Row