import React from "react";
import { ReactDOM } from "react-dom/client";

class Updating extends React.Component{
    constructor(props){
        super(props);
        this.state = {favcolor : "red"};
    }
    shouldComponentUpdate(){
        return true;
    }

    changeColor =() =>{
        this.setState({favcolor: "green"});
    }

    render(){
        return(
            <div>
                <h2>favcolor: {this.state.favcolor}</h2>
                <button type = "button" onClick={(this.changeColor)}>Click</button>
            </div>
        );
    }



} 

export default Updating;