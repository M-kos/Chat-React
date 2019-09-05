import React, {Component} from 'react';
import openSocket from 'socket.io-client';
import {Redirect} from 'react-router-dom';

import './App.css';

export default class App extends Component {

  constructor(props) {
    super(props);

    const {pathname} = this.props.location;
    this.idFromUrl = pathname.slice(1)
  }

  state = {
    idRoom: ''
  }

  componentDidMount() {
    const socket = openSocket('http://localhost:8080/');

    socket.on('connect', () => {
      console.log('connected to socket');

      if(this.idFromUrl.length == 0) {
        //Получение iD комнаты
        socket.on('getId', (id) => {
          console.log('ID: ', id);
          this.setState({
            idRoom: id.id
          })
        })
      } else {
        socket.emit('enter_the_room', {id: this.idFromUrl})
      }
    });
    
    socket.on('disconnect', () => {
      console.log('disconnected from socket');
    });
  }

  render() {
    const {idRoom} = this.state;

    let rend;

    if(idRoom.length != 0) {
      rend = (
        <div>
          <Redirect to={`/${idRoom}`} />
          <h1>Hello</h1>
        </div>
      );
    } else {
      rend = (
        <div>
          <h1>Hello 2</h1>
        </div>
      );
    }
    
    return (
      <React.Fragment>
        {rend}
      </React.Fragment>
    );
  };
}