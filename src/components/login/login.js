import React, {Component} from 'react';

import './login.css';

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
            <div className="login">
                <form className="login-form" onSubmit={(e) => {this.validationName(e, inputValue)}}>
                    <label className="login-label">Enter your name:</label>
                    <input 
                        className="login-input"
                        type="text"
                        placeholder="Your name"
                        value={inputValue}
                        onChange={this.updateInputValue}/>
                    <button className="login-btn">
                        Ok
                    </button>
                </form>
            </div>
        );
    }
}