import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {DatabasesComponent} from './databases/databases.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'databases', component: DatabasesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
