import React from 'react';

function MessageInput(props) {
    return (
        <div>
            <form>
                <label>Input your message:</label>
                <textarea placeholder="Your message"></textarea>
                <button>
                    Send
                </button>
            </form>
        </div>
    );
}

export default MessageInput;