import React, {Component} from 'react';

import './message-input.css';

export default class MessageInput extends Component {
    state = {
        textAreaValue: ''
    }

    //Обновление state при вводе текста
    updateTextAreaValue = (e) => {
        this.setState({
            textAreaValue: e.target.value
        });
    };

    //Предотвращаем отправку пустого сообщения
    validationMessage = (e, value) => {
        e.preventDefault();

        if(value.trim().length == 0) {
            return;
        } else {
            this.props.onMessage(value);
            this.setState({
                textAreaValue: ''
            });
        }
    };

    render() {
        const {textAreaValue} = this.state;

        return (
            <div className="message-input">
                <form className="message-form" onSubmit={(e) => {this.validationMessage(e, textAreaValue)}}>
                    <label className="message-label">Input your message:</label>
                    <textarea 
                        className="message-textarea"
                        placeholder="Your message"
                        value={textAreaValue}
                        onChange={this.updateTextAreaValue}>
                    </textarea>
                    <button className="message-btn">
                        Send
                    </button>
                </form>
            </div>
        );
    }
}