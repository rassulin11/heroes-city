import React, { Component } from 'react';

class Like extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false,
            like: []
        };
    }
    
    toggleClass = (e) => {
        e.preventDefault();
        this.setState({ isActive: !this.state.isActive });
    };

    render() {
        return (
        <div>
            <button className={ this.state.isActive ? 'like like_active': 'like' } onClick={ this.toggleClass }>
                <i className="fas fa-heart"></i>
            </button>
        </div>
        )
    }
}

export default Like
