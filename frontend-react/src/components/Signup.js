import React, { Component } from 'react';
import { render } from "@testing-library/react";
import { Container } from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default class Signup extends Component {
    render() {
        return (
            <body>
             <header>
                
                <div>
                <nav>
                <ul>
                    <li><Link to = {"/"}><i class = "fas fa-home fa-lg" /></Link></li>
                    <li id = "home"><Link to = {"/"}>Home</Link></li>
                    <li id = "about"><Link to = {"/about"}>About</Link></li>
                    <li id = "community"><Link to = {"/community"}>Community</Link></li>
                    <li id = "contact"><Link to = {"/contact"}>Contact</Link></li>
                    <li id = "login"><Link to = {"/login"}>Login <i class = "fas fa-sign-in-alt fa-lg"></i></Link></li>
                    <li id = "signup"><Link to = {"/signup"}>Signup <i class = "fas fa-user fa-lg"/></Link></li>
                    
                </ul>   
                </nav>
                </div>
    
            </header>    
                                  
            <form class = "form-wrap-signup justify-content-center">
                <h1>Signup</h1>
                
                <input type = "name" placeholder = "Username"/>
                <input type = "password" placeholder = "Enter Password"/>
                <input type = "password" placeholder = "Confirm Password"/>
                <input type = "email" placeholder = "Enter email ID"/>
                <button class = "signupButton">Signup</button>
                
            </form>
        
       
    </body>
        )
    }
    
}
