import React, {Component} from 'react';

import UserList from './users-list/users-list';
import MessageList from './message-list/message-list';

export default class App extends Component {
    render() {

        const {currentUsers, currentMessages} = this.props;
        

        let messagesList = currentMessages.map((el) => {
            let time = new Date(el.time).toString().substr(0, 24);

            return {
                message: el.message,
                userName: el.userName,
                time: time
            }
        });

        return (
            <div>
                <MessageList messagesList={messagesList}/>
                <UserList userList={currentUsers.map((el) => {
                    return {id: el.userId, name: el.name}
                })}/>
            </div>
        );
    };
}