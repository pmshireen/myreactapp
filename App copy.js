import logo from './logo.svg';
import './App.css';
import Form from './Form';
import Tutorial from './PropsEx';
import Student from './PropsEx';
import { useState } from 'react';
import Button from './Buttonprops';
import Color from './Color';
import Counter from './Counter';
import TrackCounter from './TrackCount';
// import Advice from './Advice';
import Car1 from './Conditional';
import ParentComp from './ParentComp';
import JsonFunc from './JsonFunc';
import State from './State';

import Updating from './Updating';
import Snapshot from './Snapshot';
import Delete from './Delete';
import Count from './Count';
import Quizapp from './Quiz/quiz';
// import UserNameForm from './ExampleInh';
import { CreateUserName ,UpdateUserName} from './ExampleInh';
import Compnav from './Compnav';
import CompSide from './CompSide';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from './AxiosCrud/Create';
import Read from './AxiosCrud/Read';
import ArrayMethods from './JsArray';
import Materialui from './Materialui';
import Notecard from './Notecard';

function App() {

  // const [name , setName ] = useState("Indira");

  return (
    <div className="App">
      <p>Hello World </p>
      {/* <Materialui/> */}
      <Notecard/>

      {/* <BrowserRouter>
      <Routes>
        <Route exact path = "/Create" element={<Create/>} />
        <Route exact path = "/Read" element={<Read/>} />
      </Routes>
      </BrowserRouter> */}
      {/* <Quizapp/>  */}

      {/* <BrowserRouter>
      <Compnav/> */}
      {/* <Routes>
        <Route path="/" element={<Compnav/> }>
        </Route>
      </Routes> */}
    {/* </BrowserRouter> */}
      {/* <CompSide/>  */}
      
      {/*<ArrayMethods/> */}

     
      {/* <CreateUserName/>
      <UpdateUserName/> */}
    
      {/* <Form/>
      <ParentComp/> */}
      {/* <State/> */}
      {/* <Count title = "Counter App"/> */}
      {/* <Snapshot/> */}
      {/* <Delete/> */}
      
      {/* <Updating/> */}
      {/* <Color/> */}
      {/* <Counter/>
      <TrackCounter/> */}
      {/* <JsonFunc/> */}
      {/* <Car1/> */}
      {/* <Advice/> */}
      {/* <Button/> */}
    </div>
);
}

export default App;
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
           My React App
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */} 
      {/* </header> */}
      {/* <Student 
          name = {"Murshi"} 
          email = {"abc@gmail.com"}
          other = {{address:"abncb" , state: "Tamilnadu" }}
      />
       <Student 
          name = {"Indira"} 
          email = {"ind@gmail.com"}
          other = {{address:"bbbbb" , state: "Tamilnadu" }}
      /> */}

      {/* <Student 
          name = {name} 
          email = {"ind@gmail.com"}
          other = {{address:"bbbbb" , state: "Tamilnadu" }} />

          <button type = "buttton" onClick = {()=>{setName("Murshi")}}>Update </button> */}

 
