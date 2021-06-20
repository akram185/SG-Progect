import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientListComponent } from './client-list/client-list.component';
import { AddClientComponent } from './add-client/add-client.component';


const routes: Routes = [
  {path: '', component: ClientListComponent},
  {path: 'add', component: AddClientComponent},
  {path: '**', component: ClientListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routeComponents = [
  ClientListComponent,
  AddClientComponent
]
