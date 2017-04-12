import { Component, OnInit } from '@angular/core';
import {ChatService} from "../Services/chat.service";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userName;
  constructor(private chatService:ChatService) {
    this.userName = '';
  }
  userNameEntered () {
    if (this.userName != '') {
      this.chatService.userLoggedIn(this.userName);
      this.chatService.toggleUserEntered();
    }
  }
  ngOnInit() {
  }

}
