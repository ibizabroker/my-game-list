import React, { Component } from 'react'
import GameInfoService from '../services/GameInfoService'
import {Link} from 'react-router-dom';
export default class ListGameInfo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            gameInfo: []
        }

        this.addGameInfo = this.addGameInfo.bind(this);
        this.editGameInfo = this.editGameInfo.bind(this);
        this.deleteGameInfo = this.deleteGameInfo.bind(this);
        this.readGameInfo = this.readGameInfo.bind(this);
    }
    
    editGameInfo(id) {
        this.props.history.push(`/edit-gameInfo/${id}`);
    }

    deleteGameInfo(id) {
        GameInfoService.deleteGameInfo(id).then( res => {
            this.setState({gameInfo: this.state.gameInfo.filter(gameInfo => gameInfo.id !== id)});
        });
    }

    readGameInfo(id) {
        this.props.history.push(`/read-gameInfo/${id}`);
    }

    componentDidMount() {
        GameInfoService.getGameInfo().then((res) => {
            this.setState({ gameInfo: res.data });
        });
    }

    addGameInfo() {
        this.props.history.push('/add-gameInfo');
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
               
                <header class = "containerAdmin">
                <table class = "content-table">
                        <thead>
                            <tr>
                                
                                <th>Poster</th>
                                <th>Name</th>
                                <th>Rating</th>
                                <th>Trailer</th>
                                <th>Actions</th>
                                <button class = "buttonAddAdmin" onClick = {this.addGameInfo}><i class = "fas fa-plus-circle fa-2x"></i></button>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.gameInfo.map(
                                    gameInfo => 
                                    <tr key = {gameInfo.id}>
                                        <td> <img src = {gameInfo.imageUrl} width = "160px" height = "90px" /></td>
                                        <td> {gameInfo.name} </td>
                                        {/* <td> {gameInfo.genre} </td> */}
                                        <td> {gameInfo.rating} </td>
                                        <td> <iframe allow = "fullscreen" width="160px" height="90px" src = {gameInfo.youtubeLink}></iframe></td> 
                                        <td>
                                        <button class = "actionIcons" onClick = {this.readGameInfo}><i class = "fas fa-glasses fa-2x"></i></button>
                                        <button class = "actionIcons" onClick = { () => this.editGameInfo(gameInfo.id)}><i class = "fas fa-edit fa-2x"></i></button>
                                        <button class = "actionIcons" onClick = { () => this.deleteGameInfo(gameInfo.id)}><i class = "fas fa-trash fa-2x"></i></button>



                                            {/* <button class = "actionIcons" onClick  = {this.addGameInfo}><i class = "fas fa-book-open fa-2x"></i></button>
                                            <button class = "actionIcons" onClick = { () => this.editGameInfo(gameInfo.id)}><i class = "fas fa-edit fa-2x"></i></button>
                                            <button class = "actionIcons" onClick = { () => this.deleteGameInfo(gameInfo.id)} ><i class = "fas fa-trash fa-2x"></i></button>  */}
                                        </td>
                                    </tr>
                                )
                            }
                
                        </tbody>
                </table> 
                </header>
            </body>
            
            
        )
    }
}