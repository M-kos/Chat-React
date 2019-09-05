import React, {Component} from 'react';

export default class Message extends Component {
    
    render() {
        const {userName, time, message} = this.props;

        return (
            <li>
                <h3>{userName}</h3>
                <p>{time}</p>
                <p>{message}</p>
            </li>
        );
    };
}