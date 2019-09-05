import React, {Component} from 'react';

import User from './user/user';

export default class UserList extends Component {
    state = {
        users: [
            {name: "Bob", id: 0},
            {name: "Rox", id: 1},
            {name: "Gen", id: 2},
            {name: "Kon", id: 3}]
    };
    
    render() {
        const {users} = this.state;

        let usersList = users.map(el => <User key={el.id} userName={el.name} />);

        return (
            <div>
                <ul>
                    {usersList}
                </ul>
            </div>
        );
    };
}