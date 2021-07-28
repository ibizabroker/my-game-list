import React, { Component } from 'react';
import { render } from "@testing-library/react";
import { Container } from 'react-bootstrap';

export default class Login extends Component {
    render() {
        return (
       
            

            <body>
                
                                  
                    <form class = "form-wrap">
                        <h1>Login</h1>
                        <img src = "http://assets.stickpng.com/thumbs/585e4d1ccb11b227491c339b.png" class = "loginLogo"/>
                        <input type = "name" placeholder = "Enter Username"/>
                        <input type = "password" placeholder = "Enter Password"/>

                        <button class = "loginButton">Login</button>
                        
                    </form>
                
               
            </body>

        )
    }
    
}
