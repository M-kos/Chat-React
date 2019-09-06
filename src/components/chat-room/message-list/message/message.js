import React, {Component} from 'react';

import './message.css';

export default class Message extends Component {
    
    render() {
        const {userName, time, message} = this.props;

        return (
            <li className="message">
                <h3 className="message-name">{userName}</h3>
                <p className="message-time">{time}</p>
                <p className="message-text">{message}</p>
            </li>
        );
    };
}