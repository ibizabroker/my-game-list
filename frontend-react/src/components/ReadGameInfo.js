import React, { Component } from 'react'
import GameInfoService from '../services/GameInfoService'
import {Link} from 'react-router-dom';

export default class ReadGameInfo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id, //get id from route
            gameInfo: []
        }

        this.goBackGameInfo = this.goBackGameInfo.bind(this);
    }

    //rest api call
    componentDidMount() {
        GameInfoService.getGameInfoById(this.state.id).then( res => {
            this.setState({gameInfo: res.data})
        })
    }

    goBackGameInfo() {
        this.props.history.push('/gameInfo');
    }

    render() {
        return (
            
            
            <body>
                
                <header>
                    <nav>
                        <ul>
                        
                            <li><Link to = {"/"}><i class = "fas fa-user-shield fa-2x" /></Link></li>
                            <li id = "home"><Link to = {"/"}>ADMIN</Link></li>
                            <li id = "login"><Link to = {"/"}>Logout <i class = "fas fa-sign-in-alt fa-lg"></i></Link></li>
                            

                        </ul>   
                    </nav>
                </header> 
               
                            
          
                <button className = "btn btn-warning" style = {{marginTop: "20px"}} onClick = {this.goBackGameInfo}>Go Back</button>
                <div className = "">
                    <br></br>
                    <h2 className = "text-left">{this.state.gameInfo.name}</h2>
                    <br></br>
                    <div className = "col">
                        <img src = {this.state.gameInfo.imageUrl} height = "300px" width = "200px"/>
                    </div>
                    <h4 style = {{paddingTop: "40px", paddingBottom: "10px"}}>Description</h4>
                    <p>{this.state.gameInfo.description}</p>
                    <h4 style = {{paddingTop: "40px", paddingBottom: "10px"}}>Rating</h4>
                    <p>{this.state.gameInfo.rating}</p>
                    <h4 style = {{paddingTop: "40px", paddingBottom: "10px"}}>Trailer</h4>
                    <iframe src = {this.state.gameInfo.youtubeLink} height = "300px" width = "400px"></iframe>
                </div>
           

            </body>
        )
    }
}
