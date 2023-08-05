import React from "react";
import './Roomdetail.css';
import BasicButtons from "./BasicButtons";
import List from './Components/List';

function Roomdetail({list}){
    return(
        <div className = "room">
            <div className="hotel">
                <BasicButtons/>
            </div>
            <List list={list} />
        </div>

    );
}
export default Roomdetail;