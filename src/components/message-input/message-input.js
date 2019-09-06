import React, {Component} from 'react';

export default class MessageInput extends Component {
    state = {
        textAreaValue: ''
    }

    updateTextAreaValue = (e) => {
        this.setState({
            textAreaValue: e.target.value
        });
    };

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
            <div>
                <form onSubmit={(e) => {this.validationMessage(e, textAreaValue)}}>
                    <label>Input your message:</label>
                    <textarea 
                        placeholder="Your message"
                        value={textAreaValue}
                        onChange={this.updateTextAreaValue}>
                    </textarea>
                    <button>
                        Send
                    </button>
                </form>
            </div>
        );
    }
}