import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactformComponent } from './reactform/reactform.component';

const routes: Routes = [
  {path:'',component:ReactformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
