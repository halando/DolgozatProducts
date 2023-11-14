import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MegrendelesComponent } from './megrendeles/megrendeles.component';


const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"megrendeles", component:MegrendelesComponent},
  {path:"", component:HomeComponent},
  {path:"**", component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
