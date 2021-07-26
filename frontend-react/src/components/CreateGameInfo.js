import React, { Component, useState } from 'react'
import Select from 'react-select';
import GameInfoService from '../services/GameInfoService';

const options = [
    { value: "React", label: "React" },
    { value: "React Native", label: "React Native" },
    { value: "Vue", label: "Vue" },
    { value: "Angular", label: "Angular" },
    { value: "RxJS", label: "RxJS" },
    { value: "jQuery", label: "jQuery" }
];

export default class CreateGameInfo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            rating: '',
            imageUrl: '',
            description: '',
            youtubeLink: ''
        }

        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeRatingHandler = this.changeRatingHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.changeImageUrlHandler = this.changeImageUrlHandler.bind(this);
        this.changeYoutubeLinkHandler = this.changeYoutubeLinkHandler.bind(this);
        this.saveGameInfo = this.saveGameInfo.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    saveGameInfo = (event) => {
        event.preventDefault();
        let gameInfo = {name: this.state.name, genre: this.state.genre, rating: this.state.rating, imageUrl: this.state.imageUrl, description: this.state.description, youtubeLink: this.state.youtubeLink};
        // console.log('gameInfo => ' + JSON.stringify(gameInfo));
        GameInfoService.createGameInfo(gameInfo).then(res => {
            this.props.history.push('/gameInfo');
        });
    }

    cancel() {
        this.props.history.push('/gameInfo');
    }

    changeNameHandler = (event) => {
        this.setState({name: event.target.value});
    }

    // state = {
    //     selectedOptions: [],
    // }
    
    // changeGenreHandler = (selectedOptions) => {
    //     this.setState({ selectedOptions });
    // }

    // handleSelectedOptions = (selectedOptions) => { 		
    //     let values = []; 		
    //     selectedOptions.map((v) => values.push(v.value));  		
    //     this.setState((state) => ({...state, tags: values}));
    // }

    changeRatingHandler = (event) => {
        this.setState({rating: event.target.value});
    }

    changeDescriptionHandler = (event) => {
        this.setState({description: event.target.value});
    }

    changeImageUrlHandler = (event) => {
        this.setState({imageUrl: event.target.value});
    }

    changeYoutubeLinkHandler = (event) => {
        this.setState({youtubeLink: event.target.value});
    }

    render() {
        // const selectedOptions = this.state;
        return (
            <div>
                <div className = "container" style = {{marginTop: "50px"}}>
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3">
                            <h3 className = "text-center" style = {{marginTop: "10px"}}>Add Game Information</h3>
                            <div className = "card-body">
                                <form>

                                    <div className = "form-group">
                                        <label style = {{marginTop: "20px"}}> Name: </label>
                                        <input placeholder = "Game Name" name = "name" className = "form-control" style = {{marginTop: "10px"}}
                                         value = {this.state.name} onChange = {this.changeNameHandler}/>
                                    </div>
                                    
                                    <div className = "form-group">
                                        <label style = {{marginTop: "20px"}}> Genre: </label>
                                        <Select
                                            // style = {{marginTop: "10px"}}
                                            isMulti
                                            closeMenuOnSelect={false}
                                            // value={selectedOption}
                                            options={options}
                                            // onChange = {this.handleSelectedOptions}
                                        />
                                        {/* {selectedOptions.map(o => <p>{o.value}</p>)} */}
                                    </div>

                                    <div className = "form-group">
                                        <label style = {{marginTop: "20px"}}> Rating: </label>
                                        <input type = "number" step="0.01" placeholder = "Rating" name = "rating" className = "form-control" style = {{marginTop: "10px"}}
                                         value = {this.state.rating} onChange = {this.changeRatingHandler}/>
                                    </div>

                                    <div className = "form-group">
                                        <label style = {{marginTop: "20px"}}> Description: </label>
                                        <input placeholder = "Description" name = "description" className = "form-control" style = {{marginTop: "10px"}}
                                         value = {this.state.description} onChange = {this.changeDescriptionHandler}/>
                                    </div>

                                    <div className = "form-group">
                                        <label style = {{marginTop: "20px"}}> Poster: </label>
                                        <input type = "url" placeholder = "Image URL" name = "imageUrl" className = "form-control" style = {{marginTop: "10px"}}
                                         value = {this.state.imageUrl} onChange = {this.changeImageUrlHandler}/>
                                    </div>

                                    <div className = "form-group">
                                        <label style = {{marginTop: "20px"}}> Trailer: </label>
                                        <input type = "url" placeholder = "YouTube Link" name = "youtubeLink" className = "form-control" style = {{marginTop: "10px"}}
                                         value = {this.state.youtubeLink} onChange = {this.changeYoutubeLinkHandler}/>
                                    </div>

                                    <button className = "btn btn-success" onClick = {this.saveGameInfo} style = {{marginTop: "20px"}}>Save</button>
                                    <button className = "btn btn-danger" onClick = {this.cancel} style = {{marginTop: "20px", marginLeft: "20px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
