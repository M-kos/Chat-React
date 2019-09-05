import React from 'react';

function Login(props) {
    return (
        <div>
            <form onSubmit={props.onLogin}>
                <label>Input your name:</label>
                <input type="text" placeholder="Your name"/>
                <button>
                    Ok
                </button>
            </form>
        </div>
    );
}

export default Login;