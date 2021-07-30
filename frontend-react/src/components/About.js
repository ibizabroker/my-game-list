import React, { Component } from 'react';
import { render } from "@testing-library/react";
import { Container } from 'react-bootstrap';
import {Link} from 'react-router-dom';


export default class About extends Component {
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
        <header class = "container-1">
            <h1>Welcome to About Page.</h1>
            <h5>We don't have anything yet here! Sorry :(</h5>   
        </header>   
           
        </body>
        )
    }
    
}
