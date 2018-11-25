import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { AddQuotesComponent } from './add-quotes/add-quotes.component';
import { EventsComponent } from './events/events.component';
import { AuthorsComponent } from './authors/authors.component';
import { QuotesComponent } from './authors/quotes/quotes.component';
import { NavigationComponent } from './navigation/navigation.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AddQuotesComponent,
    EventsComponent,
    AuthorsComponent,
    QuotesComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
