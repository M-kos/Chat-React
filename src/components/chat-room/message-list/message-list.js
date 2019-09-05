import React, {Component} from 'react';

import Message from './message/message';

export default class MessageList extends Component {
    state = {
        messages: [
            {id: "001", userName: "Bob", time: "12-01-2001", message: "lghlashl"},
            {id: "002", userName: "Gen", time: "13-01-2001", message: "lg124atsg"},
            {id: "003", userName: "Shon", time: "14-01-2001", message: "lagahtnn"},
            {id: "004", userName: "Bob", time: "15-01-2001", message: "akfjlgm"},
            {id: "005", userName: "Rob", time: "16-01-2001", message: "poeiwypoj"},
        ]
    };
    
    render() {
        const {messages} = this.state;

        let messageList = messages.map(el => <Message key={el.id} userName={el.userName} time={el.time} message={el.message}/>);

        return (
            <div>
                <ul>
                    {messageList}
                </ul>
            </div>
        );
    };
}