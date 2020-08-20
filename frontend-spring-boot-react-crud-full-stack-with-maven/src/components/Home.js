import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNav from "../components/Navigation.js";
 
const home = () => {
    return (
      
       
            <div className="container">
                <img className="logosize" src="guessthatsong6.png" alt="guess that song"></img>
                {/* <h1 className = "h1">Home</h1> */}
                {/* <p className = "p">Home page body content</p> */}
               
                <Button variant="danger" className="mr-2">Play</Button>
              
        </div>

            
       
    );
}
 
export default home;