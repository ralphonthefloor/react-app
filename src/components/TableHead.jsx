import React from "react"

function TableHead (props) {
    return (        
            <thead>
                <tr>
                        {/* Uses first object to define the columns */}
                        {Object.keys(props.data[0]).map((key) => {
                            return (
                                <th className="col" id={key}>{key}</th>
                                )
                        })}
                </tr>
            </thead>
    )
}

export default TableHead