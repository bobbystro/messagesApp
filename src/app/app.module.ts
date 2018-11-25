import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { ContactComponent } from './contact/contact.component';
import { EventsComponent } from './events/events.component';
import { AuthorsComponent } from './authors/authors.component';
import { MessagesComponent } from './authors/messages/messages.component';
import { NavigationComponent } from './navigation/navigation.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ContactComponent,
    EventsComponent,
    AuthorsComponent,
    MessagesComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
