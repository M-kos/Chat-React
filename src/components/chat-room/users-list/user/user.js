import React, {Component} from 'react';

export default class User extends Component {
    render() {
        const {userName} = this.props;

        return (
            <li>
                <p>{userName}</p>
            </li>
        );
    };
}