import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { InfoPatientComponent } from './patient/info-patient/info-patient.component';
import { LoginComponent } from './login/login.component';
import { InfopataientComponent } from './infopataient/infopataient.component';
import { PatientComponent } from './patient/patient.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path: '', component:LoginComponent,pathMatch: 'full'},
  {path:"login",component:LoginComponent},
  {path:'patient', component:PatientComponent},
  {path:'infos', component:InfopataientComponent},
  {path: "welcome",component:WelcomeComponent},
  // { path: '**', redirectTo: 'info' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// children:[
//   {path: 'info', component:InfopataientComponent,outlet: "infopatient"},
//   {path: 'infos', component: InfopataientComponent},
// ]},