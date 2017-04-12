declare const require;
const express = require ('express');
const app = express();
const http = require ('http').createServer(app);
const io = require  ('socket.io').listen(http);
const port = process.env.PORT || 3000;
let messages = [];
let users = [];

http.listen(port);
console.log('Listening...');


app.get('/',(req,res)=> {
    res.sendFile(__dirname+'/index.html');
});

io.sockets.on('connection',function(socket){
    console.log('connected');
    let userLogin = function () {
        socket.on('Login',(data)=>{
            users.push(data.userName);
            sendUsers();
        });
    };
    let sendUsers = function () {
        io.sockets.emit('New User',{users:users});
    };
    let sendMessage = function () {
        io.sockets.emit('Send Message',{messages:messages});
    };
    let receiveMessage = function () {
        socket.on('Receive Message',(data)=>{
            messages.push(data);
            sendMessage();
        });
    };
    userLogin();
    sendMessage();
    receiveMessage();
    socket.on('Logged Out',(data)=>{
        if(data.userName) {
            users.splice(users.indexOf(data.userName), 1);
            console.log(data.userName + " has logged out");
            sendUsers();
        }
    })
});

