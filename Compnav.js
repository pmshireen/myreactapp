import React from "react";
import {Content ,Header,Nav,Navbar,Container} from "rsuite";
import Home from "@rsuite/icons/legacy/Home";
import Code from "@rsuite/icons/legacy/Code";
import Info from "@rsuite/icons/legacy/Info";
import "rsuite/dist/rsuite.min.css";
import { BrowserRouter, Link ,Route,Routes } from "react-router-dom";
import CompSide from './CompSide';
// import Counter from './Counter';


function Compnav(){
    return(
        <div>
        
            <Container>
                <Header>
                    
                    <Navbar appearance = "inverse" style ={{backgroundColor:'gray'}} >
                        <Navbar.Brand>Murshidha</Navbar.Brand>
                        
                            <Nav>
                          
                                <Nav.Item icon ={<Home/>} style = {{ ':hover': { backgroundColor: 'red' }}}><Link to ="/">Home</Link></Nav.Item>
                        
                                <Nav.Item icon ={<Info />} > <Link to ="/compSide">Products</Link></Nav.Item>
                                <Nav.Item icon ={<Code/>}>Practice </Nav.Item>

                                
                                <Nav.Menu title = "Tutorials">
                                    <Nav.Item>DS</Nav.Item>
                                    <Nav.Item>Algorithms</Nav.Item>
                                    <Nav.Item>Web Developer</Nav.Item>
                                    <Nav.Item>Cyber</Nav.Item>
                                </Nav.Menu>
                               
                            </Nav>
                          

                        <Nav pullRight>
                            <Nav.Item>Contact</Nav.Item>
                        </Nav>
                    </Navbar>
                   

                </Header>
                <Content>
                <h4 style = {{textAlign: 'center'}}>Welcome</h4>
            </Content>
            </Container>

            
            <Routes>
                <Route path = "/" element = {<Compnav />} />
                <Route path = "/CompSide" element = {<CompSide />} />

             </Routes>
        
            
        </div>

    );
}
export default Compnav;
