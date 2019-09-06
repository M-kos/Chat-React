import React, {Component} from 'react';
import openSocket from 'socket.io-client';
import {Redirect} from 'react-router-dom';

import Login from '../login/login';
import ChatRoom from '../chat-room/chat-room';

import './App.css';

const socket = openSocket('http://localhost:8080/');

export default class App extends Component {

  constructor(props) {
    super(props);

    const {pathname} = this.props.location;
    this.idFromUrl = pathname.slice(1)
  }

  state = {
    idRoom: '',
    isLogin: false,
    currentUsers: []
  }

  componentDidMount() {

    socket.on('connect', () => {
      console.log('connected to socket');

      if(this.idFromUrl.length == 0) {
        this.setState({
          idRoom: socket.id
        })
      } else {
        this.setState({
          idRoom: this.idFromUrl
        })
        socket.emit('enter_the_room', {id: this.idFromUrl})
      }
    });

    socket.on('updateUserList', (users) => {
      let newUsersList = [...users]
      this.setState({
        currentUsers: newUsersList
      })
    });
    
    socket.on('disconnect', () => {
      console.log('disconnected from socket');
    });
  }

  onLogin = (value) => {

    socket.emit('new_user', {name: value, idRoom: this.state.idRoom, userId: socket.id})

    this.setState({
      islogin: true
    });
  };

  render() {
    const {idRoom, islogin, currentUsers} = this.state;

    let rend;

    if(this.idFromUrl.length == 0) {
      rend = (
        <div>
          <Redirect to={`/${idRoom}`} />
          <ChatRoom currentUsers={currentUsers}/>
        </div>
      );
    } else {
      rend = (
        <div>
          <ChatRoom currentUsers={currentUsers}/>
        </div>
      );
    }
    
    return (
      <React.Fragment>
        {
          islogin ? (
            <div>
              {rend}
            </div>
          ) : (
            <Login onLogin={this.onLogin}/>
          )
        }
      </React.Fragment>
    );
  };
}