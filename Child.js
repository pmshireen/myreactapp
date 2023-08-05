import React from "react";

function Child(props){
    return(

        <div>
            <h3>Child Component</h3>
            {/* <button onClick={props.greetHandler}>Greet</button> */}
            
            <button onClick={ () => props.greetHandler('child')}>Greet</button>
            

        </div>

    );
}

export default Child;