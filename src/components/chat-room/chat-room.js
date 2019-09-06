import React, {Component} from 'react';

import UserList from './users-list/users-list';
import MessageList from './message-list/message-list';

import './chat-room.css';

export default class App extends Component {
    render() {

        const {currentUsers, currentMessages} = this.props;
        
        //Присваиваем в переменную массив сообщений с датой представленной строкой в читаемом формате
        let messagesList = currentMessages.map((el) => {
            let time = new Date(el.time).toString().substr(0, 24);

            return {
                message: el.message,
                userName: el.userName,
                time: time
            }
        });

        return (
            <div className="chat-room">
                <MessageList messagesList={messagesList}/>
                <UserList userList={currentUsers.map((el) => {
                    return {id: el.userId, name: el.name}
                })}/>
            </div>
        );
    };
}