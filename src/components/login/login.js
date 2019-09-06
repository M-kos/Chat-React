import React, {Component} from 'react';

export default class Login extends Component {

    state = {
        inputValue: ''
    }

    updateInputValue = (e) => {
        this.setState({
            inputValue: e.target.value
        });
    };

    validationName = (e,value) => {
        e.preventDefault();

        if(value.trim().length == 0) {
            alert("Enter your name!");
            return;
        } else {
            this.props.onLogin(value);
        }
    };

    render() {
        const {inputValue} = this.state;

        return (
            <div>
                <form onSubmit={(e) => {this.validationName(e, inputValue)}}>
                    <label>Input your name:</label>
                    <input 
                        type="text"
                        placeholder="Your name"
                        value={inputValue}
                        onChange={this.updateInputValue}/>
                    <button>
                        Ok
                    </button>
                </form>
            </div>
        );
    }
}