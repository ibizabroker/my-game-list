import React, { Component } from 'react'
import GameInfoService from '../services/GameInfoService'

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
            <div>
               
                      
                <h2 className = "text-center">Game Information List</h2>
                <div className = "">
                    <button className = "btn btn-primary" style = {{marginBottom: "20px"}} onClick = {this.addGameInfo}>Add</button>
                </div>
                    <table className = "table table-striped table-dark table-bordered">
                        <thead>
                            <tr>
                                <th>Poster</th>
                                <th>Name</th>
                                <th>Genre</th>
                                <th>Rating</th>
                                <th>Trailer</th>
                                {/* <th>Description</th> */}
                                <th>Action Buttons</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.gameInfo.map(
                                    gameInfo => 
                                    <tr key = {gameInfo.id}>
                                        <td> <img src = {gameInfo.imageUrl} width = "150px" height = "200px" /></td>
                                        <td> {gameInfo.name} </td>
                                        <td> {gameInfo.genre} </td>
                                        <td> {gameInfo.rating} </td>
                                        <td> <iframe allow = "fullscreen" width="300px" height="200px" src = {gameInfo.youtubeLink}></iframe></td>
                                        {/* <td> {gameInfo.description} </td> */}
                                        <td>
                                            <button onClick = { () => this.readGameInfo(gameInfo.id)} className = "btn btn-info">Read</button>
                                            <button style = {{marginLeft: "20px"}} onClick = { () => this.editGameInfo(gameInfo.id)} className = "btn btn-light">Edit</button>
                                            <button style = {{marginLeft: "20px"}} onClick = { () => this.deleteGameInfo(gameInfo.id)} className = "btn btn-danger">Delete</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                
            </div>
        )
    }
}