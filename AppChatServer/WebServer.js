var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io').listen(http);
var port = process.env.PORT || 3000;
var messages = [];
var users = [];
http.listen(port);
console.log('Listening...');
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});
io.sockets.on('connection', function (socket) {
    console.log('connected');
    var userLogin = function () {
        socket.on('Login', function (data) {
            users.push(data.userName);
            sendUsers();
        });
    };
    var sendUsers = function () {
        io.sockets.emit('New User', { users: users });
    };
    var sendMessage = function () {
        io.sockets.emit('Send Message', { messages: messages });
    };
    var receiveMessage = function () {
        socket.on('Receive Message', function (data) {
            messages.push(data);
            sendMessage();
        });
    };
    userLogin();
    sendMessage();
    receiveMessage();
    socket.on('Logged Out', function (data) {
        if (data.userName) {
            users.splice(users.indexOf(data.userName), 1);
            console.log(data.userName + " has logged out");
            sendUsers();
        }
    });
});
