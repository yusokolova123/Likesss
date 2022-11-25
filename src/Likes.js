import { Component } from 'react';

export class Likes extends Component {
    constructor() {
        super();

        this.state = {
            likes: 10       
        }
    }

    updateLikes() {
        
        if (this.state.likes == 0 ) {    
            return;
        }
        
        this.setState({likes: this.state.likes - 1})

    }
    render() {
        return (
            <div>
                <h1>{this.state.likes} Likes</h1>
                <button onClick={() => this.updateLikes()}>Remove a like</button>
            </div>
        )
    }
}