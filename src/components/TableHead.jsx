// TableHead.jsx

import React from "react"

// Creates table head from keys of first JSON object in array
function TableHead (props) {
    
    const keys = Object.keys(props.data[0]); // Uses first object to define the columns

    return (        
            <thead>
                <tr>
                        {keys.map((key) => {
                            return (
                                <th className="col" id={key}>{key}</th>
                                )
                        })}
                </tr>
            </thead>
    )
}

export default TableHead