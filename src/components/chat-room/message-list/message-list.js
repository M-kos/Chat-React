import React, {Component} from 'react';

import Message from './message/message';

export default class MessageList extends Component {
    
    render() {
        const {messagesList} = this.props;

        let messageList = messagesList.map((el, i) => <Message key={i} userName={el.userName} time={el.time} message={el.message}/>);

        return (
            <div>
                <ul>
                    {messageList}
                </ul>
            </div>
        );
    };
}