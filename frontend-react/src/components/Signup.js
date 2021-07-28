import React, { Component } from 'react';
import { render } from "@testing-library/react";
import { Container } from 'react-bootstrap';

export default class Signup extends Component {
    render() {
        return (
            <body>
                
                                  
            <form class = "form-wrap-signup justify-content-center">
                <h1>Signup</h1>
                
                <input type = "name" placeholder = "Username"/>
                <input type = "password" placeholder = "Enter Password"/>
                <input type = "password" placeholder = "Confirm Password"/>
                <input type = "email" placeholder = "Enter email ID"/>
                <input type = "number" placeholder="Age"/>

                <button class = "signupButton">Signup</button>
                
            </form>
        
       
    </body>
        )
    }
    
}
