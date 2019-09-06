import React, {Component} from 'react';

import './user.css';

export default class User extends Component {
    
    render() {
        const {userName} = this.props;

        return (
            <li className="user">
                <p className="user-name">{userName}</p>
            </li>
        );
    };
}