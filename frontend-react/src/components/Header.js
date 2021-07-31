import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import FontAwesomeIcon from "@fortawesome/react-fontawesome"


export default class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
        
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
        )
    }
}
