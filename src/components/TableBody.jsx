import React from "react"
import Row from "./Row"

function TableBody (props) {
    return (
        <tbody>
            {props.data.map((device) => {
                return (
                    <Row key={device.id} device={device}/>
            )
        })}
        </tbody>
    )
}

export default TableBody