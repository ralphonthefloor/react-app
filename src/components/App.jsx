import React from "react";
import Table from "./Table";
import Header from "./Header"

function App() {
    
    console.log(window.socket); //We have access to socket here from client side script. Compiler doesn't like calling it without window. prefix
    
    return (
            <div>
                <Header />
                <Table />
            </div>
        )
};

export default App;