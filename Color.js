import React from "react";


class Color extends React.Component{
    constructor(props){
    super(props);
    this.state = {favoritecolor: "red"};
    }

    changeColor=()=>{
        this.setState ({favoritecolor : "blue"});
    }


render() {
    return(
        <div>
            <h2>My Color is {this.state.favoritecolor}</h2>
            <button type = "button" onClick={this.changeColor}>ChangeColor</button>
        </div>
    );
}

}

export default Color;