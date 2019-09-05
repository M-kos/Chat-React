import React, {Component} from 'react';
import openSocket from 'socket.io-client';

import './App.css';

export default class App extends Component {

  componentDidMount() {
    const socket = openSocket('http://localhost:8080/');

    socket.on('connect', function () {
      console.log('connected to socket');
    });
    socket.on('disconnect', function () {
      console.log('disconnected from socket');
    });
  }



  render() {
  };
}


