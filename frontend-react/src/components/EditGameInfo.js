import React, { Component } from 'react'
import Select from 'react-select';
import GameInfoService from '../services/GameInfoService';

const options = [
    { value: "Action", label: "Action" },
    { value: "Adventure", label: "Adventure" },
    { value: "FPS", label: "FPS" },
    { value: "Open-World", label: "Open-World" },
    { value: "Role Playing", label: "Role Playing" },
    { value: "Simulation", label: "Simulation" }
];

export default class EditGameInfo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
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
        this.editGameInfo = this.editGameInfo.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    componentDidMount() {
        GameInfoService.getGameInfoById(this.state.id).then( (res) => {
            let gameInfo = res.data;
            this.setState({name: gameInfo.name,
                rating: gameInfo.rating,
                genre: gameInfo.genre,
                imageUrl: gameInfo.imageUrl,
                description: gameInfo.description,
                youtubeLink: gameInfo.youtubeLink
            });
        });
    }

    editGameInfo = (event) => {
        event.preventDefault();
        let gameInfo = {name: this.state.name, genre: this.state.genre, rating: this.state.rating, imageUrl: this.state.imageUrl, description: this.state.description, youtubeLink: this.state.youtubeLink};
        // console.log('gameInfo => ' + JSON.stringify(gameInfo));
        GameInfoService.updateGameInfo(gameInfo, this.state.id).then( res => {
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
                            <h3 className = "text-center" style = {{marginTop: "10px"}}>Edit Game Information</h3>
                            <div className = "card-body">
                                <form autocomplete="off">

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

                                    <button className = "btn btn-success" onClick = {this.editGameInfo} style = {{marginTop: "20px"}}>Save</button>
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
