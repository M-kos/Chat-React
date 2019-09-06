import React, {Component} from 'react';

import User from './user/user';

import './users-list.css';

export default class UserList extends Component {
    
    render() {
        const {userList} = this.props;

        //Записывает в переменную массив компонентов User с установленными пропсами
        let usersList = userList.map(el => <User key={el.id} userName={el.name} />);

        return (
            <div className="user-list">
                <ul className="user-list-ul">
                    {usersList}
                </ul>
            </div>
        );
    };
}