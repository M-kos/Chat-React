import React, {Component} from 'react';

import UserList from './users-list/users-list';
import MessageList from './message-list/message-list';

export default class App extends Component {
    render() {
        return (
            <div>
                <MessageList />
                <UserList />
            </div>
        );
    };
}