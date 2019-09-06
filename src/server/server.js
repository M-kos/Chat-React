const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const path = require('path');

const port = 8080;

let usersAll = [];
let usersOnline = [];
let messages = [];

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

io.on('connection', function (socket) {

    socket.on('enter_the_room', (obj) => {
        socket.join(obj.id);
        console.log('User join room: ', obj.id);
    });

    //создаем нового пользователя, добавлеям в массивы всех пользователей и пользователей онлайн, уведомляем пользователей  комнате
    socket.on('new_user', (obj) => {
        usersAll.push(obj);
        usersOnline.push(obj);

        io.to(obj.idRoom).emit('updateUserList', idRoomFilter(usersOnline, obj));

        io.to(obj.idRoom).emit('getMessagesList', idRoomFilter(messages, obj));
    });

    //создаем новое сообщение и уведомляем всех пользователей в комнате
    socket.on('new_message', (obj) => {
        messages.push(createMessage(obj));
        io.to(obj.idRoom).emit('updateMessagesList', idRoomFilter(messages, obj));
    });

    console.log('User connect');

    socket.on('disconnect', function (data) {
        //удаляем вышедшего юзера и передаем клиентам обновленный список онлайн юзеров
        let user = usersOnline.find(el => el.userId == socket.id);
        let userIndex = usersOnline.indexOf(user);
        let newUserList = [...usersOnline.slice(0, userIndex), ...usersOnline.slice(userIndex + 1)];

        usersOnline = [...newUserList];

        if(userIndex > 0) {
            io.to(user.idRoom).emit('updateUserList', idRoomFilter(usersOnline, user));
        }

        console.log('User disconnect');
    });
});

server.listen(port, function () {
    console.log('app running on port ' + port);
})


//Создает элемент массива messages
function createMessage(obj) {
    let user = usersAll.find(el => el.userId == obj.userId)

    return {
        message: obj.message,
        idRoom: obj.idRoom,
        userName: user.name,
        time: obj.time
    }
}
//фильтрует данный массив и возращает ноый массив, где свойство idRoom совпадает с аналогичным свойством из передаваемого объекта
function idRoomFilter(arr, obj) {
    let newArr = arr.filter((el) => {
        return el.idRoom == obj.idRoom;
    });
    return newArr;
}