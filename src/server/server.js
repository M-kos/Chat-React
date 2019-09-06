const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const path = require('path');

const port = 8080;

let users = [];
let messages = [];

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

io.on('connection', function (socket) {

    socket.on('enter_the_room', (obj) => {
        socket.join(obj.id);
        console.log('User join room: ', obj.id);
    });

    socket.on('new_user', (obj) => {
        users.push(obj);
        io.to(obj.idRoom).emit('updateUserList', users.filter((el) => {
            return el.idRoom == obj.idRoom;
        }));
    }); 'new_message'

    socket.on('new_message', (obj) => {
        messages.push(obj);
        io.to(obj.idRoom).emit('updateMessagesList', messages.filter((el) => {
            return el.idRoom == obj.idRoom;
        }));
    });

    console.log('User connect');

    socket.on('disconnect', function (data) {
        let user = users.find(el => el.userId == socket.id);
        let userIndex = users.indexOf(user);
        let newUserList = [...users.slice(0, userIndex), ...users.slice(userIndex + 1)];

        users = [...newUserList];

        if(userIndex > 0) {
            io.to(user.idRoom).emit('updateUserList', users.filter((el) => {
                return el.idRoom == user.idRoom;
            }));
        }

        console.log('User disconnect');
    });
});

server.listen(port, function () {
    console.log('app running on port ' + port);
})