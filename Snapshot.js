import React from "react";

class Snapshot extends React.Component{
    constructor(props){
        super(props);
        this.state = {favcolor : "blue"};
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({favcolor : "yellow"})
        }, 1000);
    }
     
    componentDidUpdate(){
        document.getElementById("div2").innerHTML = "After "+this.state.favcolor;
        
    }
    
    getSnapshotBeforeUpdate(props , prevstate){
        document.getElementById("div1").innerHTML = "before  " + prevstate.favcolor;
        

    }

  

    render(){
        return(
            <div>
                <h3>My favcolor is {this.state.favcolor}</h3>
                <div id = "div1"></div>
                <div id = "div2"></div>
            </div>

        );
    }


}

export default Snapshot;