import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
        
        <header>
        <Link to = {"/"}><img src = "https://lh3.googleusercontent.com/proxy/6MLWad1noutRky-GBf2ClyiEflzEFLASnN5T7f0w39aC7yGah9MmEU9suxnk0DBsV_M1OvqbbJoo6KFEGqwiikZvnMpz4imMqjyOHzM7EaZojMiCOKJzmKhKFjMiC58jRJBgyQ"
            alt = "logo" class = "logo" 
            /></Link>
        <a href = "https://discord.gg/4yDnAnF"><img src = "https://www.freepnglogos.com/uploads/discord-logo-png/discord-logo-logodownload-download-logotipos-1.png"
            alt = "logo-right" class = "logo-right" href = "https://discord.gg/4yDnAnF" target="_blank"
            /> </a>             
         
            
        <img src = "https://www.freeiconspng.com/uploads/github-logo-icon-30.png"
            alt = "logo-rightRight" class = "logo-right1" 
        />
         <img src = "https://image.flaticon.com/icons/png/512/220/220223.png"
            alt = "logo-rightRight" class = "logo-right2" 
        />
       
        
           
            <div>
            <nav>
            <ul>
                <li id = "home"><Link to = {"/"}>Home</Link></li>
                <li id = "about"><Link to = {"/about"}>About</Link></li>
                <li id = "community"><Link to = {"/community"}>Community</Link></li>
                <li id = "contact"><Link to = {"/contact"}>Contact</Link></li>
                <li id = "login"><Link to = {"/login"}>Login</Link></li>
                <li id = "signup"><Link to = {"/signup"}>Signup</Link></li>
            </ul>   
            </nav>
            </div>

        </header> 
        )
    }
}
