import React, {Component} from 'react';

import UserList from './users-list/users-list';
import MessageList from './message-list/message-list';

export default class App extends Component {
    render() {
        const {currentUsers} = this.props;
        console.log(currentUsers);
        return (
            <div>
                <MessageList />
                <UserList />
            </div>
        );
    };
}