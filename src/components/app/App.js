import React, {Component} from 'react';
import openSocket from 'socket.io-client';
import {Redirect} from 'react-router-dom';

import './App.css';

export default class App extends Component {

  state = {
    idRoom: ''
  }

  componentDidMount() {
    const socket = openSocket('http://localhost:8080/');

    socket.on('connect', () => {
      console.log('connected to socket');
    });
    socket.on('onConnection', (id) => {
      console.log('ID: ', id);
      this.setState({
        idRoom: id.id
      })
    })
    socket.on('disconnect', () => {
      console.log('disconnected from socket');
    });
  }




  render() {
    const {idRoom} = this.state;
    console.log("Location");
    console.log(this.props.location);
    console.log("Match");
    console.log(this.props.match);
    return (
      <div>
        <Redirect to={`/${idRoom}`} />
        <h1>Hello</h1>
      </div>
    );
  };
}


