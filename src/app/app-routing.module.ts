import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Page/home/home.component';
import { ContactComponent } from './Page/contact/contact.component';

const routes: Routes = [{
  path:'',component:HomeComponent
 }
,{
   path:'contact',component:ContactComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
