import {Component, HostListener} from '@angular/core';
import {ChatService} from "./Services/chat.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  get userEntered () {
    return {
      state:this.chatService.userEntered,
    }
  }
  constructor(private chatService:ChatService) {
  }

  @HostListener('window:unload', [ '$event' ])
  userLoggedOut() {
    this.chatService.logout();
  }
}
