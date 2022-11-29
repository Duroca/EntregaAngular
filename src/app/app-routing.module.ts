import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NagelmueblesAboutComponent } from './nagelmuebles-about/nagelmuebles-about.component';
import { NagelmueblesBodyComponent } from './nagelmuebles-body/nagelmuebles-body.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'muebles',
    pathMatch:'full'
  },
  {
    path: 'muebles',
    component: NagelmueblesBodyComponent
  },
  {
    path: 'about',
    component: NagelmueblesAboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
