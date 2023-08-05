import React , {Component} from "react";
import Child from "./Child";

export default  class ParentComp extends Component{
    constructor(props){
        super(props);
        this.state = {
            parentName : 'Parent Component'
        }

        this.greetParent = this.greetParent.bind(this);
    }

    greetParent(childName) {
        // alert('Hello ' + this.state.parentName) ;
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }
    render() {
        return(
            <div>
                <Child greetHandler = {this.greetParent} />
                
                
            </div>
        )
    }
}

