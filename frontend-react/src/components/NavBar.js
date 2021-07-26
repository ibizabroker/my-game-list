import React, { Component } from 'react'

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className = "navbar navbar-expand-md navbar-light bg-light">
                        <div>
                            <a href = "#" className = "navbar-brand">Top Games</a>
                            <a href = "#" className = "navbar-brand">Categories</a>
                            <a href = "#" className = "navbar-brand">Community</a>
                            <a href = "#" className = "navbar-brand">Help</a>
                        </div>
                </nav>
            </div>
        )
    }
}

