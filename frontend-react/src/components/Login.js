import React, { Component } from 'react';
import { render } from "@testing-library/react";
import { Container } from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default class Login extends Component {


   
    constructor(props) {
        super(props)

        this.state = this.initialState;
        }

        initialState = {
            email:'', password: ''
        }


    render() {
        const {username, password } = this.state;
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
                                                 
                    <form class = "form-wrap">
                        <h1>Login</h1>
                        <i class = "fas fa-user-lock fa-5x "/>
                        <input type = "name" placeholder = "Enter Username" />
                        <input type = "password" placeholder = "Enter Password"/>

                        <button class = "loginButton"><Link to = {"/gameInfo"} class = "linkStyle">Login <i class = "fas fa-user"></i></Link></button>
                        
                        <h5>Don't have an account? <Link to = {"/signup"} class = "linkStyle">Sign Up!</Link></h5>
                    </form>
                
               
            </body>

        )
    }
    
}
