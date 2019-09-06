import React from 'react';

export default class MessageInput {
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
            alert("Enter your name!");
            return;
        } else {
            this.props.onMessage(value);
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