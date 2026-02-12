import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './ui-components/home/home';
import { Contact } from './ui-components/contact/contact';
import { UiLayout } from './layouts/ui-layout/ui-layout';

const routes: Routes = [
  //ui-Route
  {path:'',component:UiLayout,children:[
    {path:'',component:Home},
    {path:'contact',component:Contact}
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
