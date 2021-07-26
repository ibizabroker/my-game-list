import React, { Component } from 'react'

export default class Footer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                <footer className = "footer">
                    <span className = "text-muted">Copyright &copy; 2021 MyGameList</span>
                </footer>
            </div>
        )
    }
}
