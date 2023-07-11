import React, { useState, useEffect }from "react"
import Table from "./Table";
import Header from "./Header"

function App() {
    
    console.log(window.socket); //We have access to socket here from client side script. Compiler doesn't like calling it without window. prefix
    let [devices,setDevices] = useState([{"key":0,"name":"fred","id":"bastardo"},{"key":1,"name":"mark","id":"asshole"},{"key":2,"name":"stan","id":"motherfucker"},{"key":3,"name":"volkswagen","id":"dickheads"}]);

    useEffect(()=>
    {
      window.socket.on('update',(message)=>
      {
        setDevices(message);
      })
  
      return ()=>
      {
        window.socket.off('update');
      }
  
    },[])

    return (
            <div>
                <Header devices={devices} />
                <Table devices={devices} />
            </div>
        )
};

export default App;