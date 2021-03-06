import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Home extends Component {
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
            <i class = "fas fa-gamepad fa-10x "/>
            <h1 class = "fade-in-text">Welcome to the Repository of Games.</h1>
            <h5 class = "fade-in-text">The simplest way to keep track of all the games you wish to play!</h5>

            <button class = "button">Getting Started!</button>
                  
                   
        </header>   
           
        </body>
        )
    }
    
}



