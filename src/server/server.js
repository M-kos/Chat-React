const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const path = require('path');

const port = 8080;

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

io.on('connection', function (socket) {

    console.log('User connect');

    socket.on('disconnect', function (data) {
        console.log('User disconnect');
    });
});

server.listen(port, function () {
    console.log('app running on port ' + port);
})