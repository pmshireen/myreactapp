import React from "react";

class Delete extends React.Component{
    constructor(props){
        super(props);
        this.state = {show : true};
    }

    delHeader = () =>{
        this.setState({show : false});
    }
    render(){
        let myheader ; 
        if(this.state.show)  {
            myheader = <Child/> ;

        };
        return(
            <div>
                {myheader}
                <button type = "button" onClick={this.delHeader}>
                    Delete
                </button>
            </div>
        );
    }
}

class  Child extends React.Component{
    componentWillUnmount(){

        alert("Component to be deleted");
    }
    render(){
        return(
            <>
            <p>Murshidha shireen</p>
            <h4>jdfnsdjnn</h4>
            <h4>Child Component</h4>
            </>
        );
    }
}

export default Delete;