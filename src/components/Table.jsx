// Table.jsx

import React from "react"
import TableHead from "./TableHead"
import TableBody from "./TableBody"

// const [devices,setDevices] = useState([{"name":"fred","id":"bastardo"},{"name":"mark","id":"asshole"},{"name":"stan","id":"motherfucker"},{"name":"volkswagen","id":"dickheads"}]);
// setTimeout(() => {setDevices([{"name":"just a me-a maaaaaaaaaario"}])},5000);

function Table(props) {
    // let [devices,setDevices] = useState([{"key":0,"name":"fred","id":"bastardo"},{"key":1,"name":"mark","id":"asshole"},{"key":2,"name":"stan","id":"motherfucker"},{"key":3,"name":"volkswagen","id":"dickheads"}]);
    // setTimeout(() => {
    //     let newDevices = [...devices,{"key":devices.length,"name":"mario","id":"actually luigi"}];
    //     setDevices(newDevices);
    // },5000);

    // debugger;

    return (
        <table id="deviceTable" className="table table-light table-hover table-striped">
            <TableHead data={props.devices}/>
            <TableBody data={props.devices}/>
        </table>
    )
}

export default Table;