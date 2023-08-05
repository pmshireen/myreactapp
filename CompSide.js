import React from "react";

import { Content ,Header,Sidebar,Container,Footer} from "rsuite";
import "rsuite/dist/rsuite.min.css";
import Compnav from './Compnav';


function CompSide() {
    return(
        <div>
            {/* <h5>Side bar</h5>
            <h4 style = {{color: "green"}}>React Suite Sidebar</h4> */}
            <div style ={{}}>
               
                <Container>
                    
                    <Sidebar style={{ backgroundColor: "#172F50",padding: 30,height: 700}}>
                        <h4 style ={{color: "teal"}}>sidebar contents</h4>
                        <ul style ={{color: "white"}}>
                            <li>Tutorials</li>
                            <li>Courses</li>
                            <li>Practice</li>
                            <li>Contact</li>
                        </ul>
                    </Sidebar>
                <Container>
                {/* <Compnav/> */}

                {/* <Header style ={{backgroundColor: "blue" , padding: 10,color: "white"}}>
                </Header>

                <Content>
                    GeeksforGeeks is a portal for geeks. 
                    It is a collection of well-written, 
                    well-thought, and well-responsive articles.
                </Content>
                <Footer style ={{backgroundColor: "gray" ,padding: 20, color: "white"}}>
                    @pmshireen.org
                </Footer> */}
                </Container>
                </Container>
            </div>
        </div>

    );
}
export default CompSide;