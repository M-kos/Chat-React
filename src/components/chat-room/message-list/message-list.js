import React, {Component} from 'react';

import Message from './message/message';

import './message-list.css';

export default class MessageList extends Component {
    
    render() {
        const {messagesList} = this.props;

        //Записывает в переменную массив компонентов Message с установленными пропсами
        let messageList = messagesList.map((el, i) => <Message key={i} userName={el.userName} time={el.time} message={el.message}/>);

        return (
            <div className="message-list">
                <ul className="message-list-ul">
                    {messageList}
                </ul>
            </div>
        );
    };
}