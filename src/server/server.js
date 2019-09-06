const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const path = require('path');

const port = 8080;

let users = [];

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
        io.to(obj.id).emit('updateUserList', users.filter((el) => {
            return el.id == obj.id;
        }));
    });

    socket.on('get_users', (id) => {
        let currentUsers = users.filter((el) => {
            return el.id == id;
        });
        socket.emit('send_users', currentUsers)
    })

    console.log('User connect');

    socket.on('disconnect', function (data) {
        console.log('User disconnect');
    });
});

server.listen(port, function () {
    console.log('app running on port ' + port);
})