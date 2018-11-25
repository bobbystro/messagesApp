import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from './index/index.component';
import {AddQuotesComponent} from './add-quotes/add-quotes.component';
import {EventsComponent} from './events/events.component';
import {AuthorsComponent} from './authors/authors.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: IndexComponent},
  {path: 'add-quotes', component: AddQuotesComponent},
  {path: 'events', component: EventsComponent},
  {path: 'authors', component: AuthorsComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
