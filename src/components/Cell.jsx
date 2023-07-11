// Cell.jsx

import React from "react"

// Creates cell from JSON property
function Cell (props) {

    return (
        <td>
            {props.prop}
        </td>
    )
}


export default Cell