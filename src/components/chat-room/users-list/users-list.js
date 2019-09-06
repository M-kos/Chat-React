import React, {Component} from 'react';

import User from './user/user';

export default class UserList extends Component {
    
    render() {
        const {userList} = this.props;

        let usersList = userList.map(el => <User key={el.id} userName={el.name} />);

        return (
            <div>
                <ul>
                    {usersList}
                </ul>
            </div>
        );
    };
}