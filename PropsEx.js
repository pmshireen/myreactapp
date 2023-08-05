import React, { useState } from "react";

function Student(props){

   
    return(
        <>
        <h2>Student Details</h2>
        <h3>Name:{props.name}</h3>
        <h3>Email:{props.email}</h3>
        <h3>Address:{props.other.address}</h3>
        </>

    );
}

export default Student;