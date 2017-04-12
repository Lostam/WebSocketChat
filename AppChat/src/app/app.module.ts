import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {ChatService} from "./Services/chat.service";
import { ChatFrameWorkComponent } from './chat-frame-work/chat-frame-work.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChatFrameWorkComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    ChatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
