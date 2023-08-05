import React from "react";


function Car(props){
return  <h4>Iam a {props.brands}</h4>;
}

function Car1(){

    
    // const cars = ['audi' , 'ferrari','ghkjbj'];
   
    const cars = [
        {"id" : 2 , "brand" : "audi"},
        {"id" : 3 , "brand" : "ferrari"},
        {"id" : 4 , "brand" : "ghjkn"}
    ];

    // const cars = props.cars;

    return(
        <>
        <h5>Car Garage</h5>

        {/* { cars.length > 0 ?    
            <h4>You have cars {cars.length}</h4>:
            <h4>false</h4>
        } */}
            {cars.map(
                (car)=> 
                 <Car key = {car.id} brands = {car.brand} />)
            }
            
        </>
    
    );
}

export default Car1;

