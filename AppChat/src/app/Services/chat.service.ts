import {Injectable} from '@angular/core';
import * as io from 'socket.io-client';

@Injectable()


export class ChatService {
  socket:any;
  userName:string;
  users:Array<any> = [];
  date:Date;
  userEntered:boolean;
  messages:Array<any> = [];
  constructor() {
    this.userEntered = false;
    this.socket = io('http://localhost:3000').connect();
    this.serverListener();
  }
  userLoggedIn (userName) {
    this.userName = userName;
    this.socket.emit('Login',{userName:userName})
  }
  toggleUserEntered () {
    this.userEntered = !this.userEntered;
  }
  serverListener () {
    this.socket.on('Send Message',(data)=> {
      this.messages = data.messages;
      console.log(data.messages);
    });
    this.socket.on('New User',(data)=>{
      this.users = data.users;
    })
  }
  sendMessageToServer (message) {
    this.date = new Date();
    let newMessage = {
      message:message,
      date:this.date.getTime(),
      sender:this.userName
    };
    this.socket.emit('Receive Message',newMessage);
  }
  logout () {
    this.socket.emit('Logged Out',{userName:this.userName});
  }

}
