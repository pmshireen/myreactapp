import React from "react";

class State extends React.Component{
    render(){
        return(
            <Child name = "Sachin" ></Child>
        );
    }
}

class Child extends React.Component{
    constructor(props){
    super(props);
    this.state = {  name : "kapil"};

}


static getDerivedStateFromProps(props , state){
    if(props.name !== state.name){
        return{
            name: props.name
        };
    }
    return null;
}

render(){
    return(
        <div>
            My name is {this.state.name}
        </div>
    )
}
}
export default State;