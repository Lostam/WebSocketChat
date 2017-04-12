import { Component, OnInit } from '@angular/core';
import {ChatService} from "../Services/chat.service";

@Component({
  selector: 'app-chat-frame-work',
  templateUrl: './chat-frame-work.component.html',
  styleUrls: ['./chat-frame-work.component.scss']
})
export class ChatFrameWorkComponent implements OnInit {
  inputText;
  messages = [];
  get data () {
     return {
       messages: this.chatService.messages,
       users:this.chatService.users
     }
  }
  constructor(private chatService:ChatService) {
    this.inputText = '...'
  }

  ngOnInit() {
  }

  messageEntered(event) {
    if (event.key == 'Enter') {
      event.preventDefault();
      this.chatService.sendMessageToServer(this.inputText);
      this.inputText = ''
    }
  }
}
