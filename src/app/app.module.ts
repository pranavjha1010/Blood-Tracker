import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormField} from '@angular/material/form-field';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DonarReistrationComponent } from './donar-reistration/donar-reistration.component';
import { BloodCampsComponent } from './blood-camps/blood-camps.component';
import { CampRegistrationComponent } from './camp-registration/camp-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    DonarReistrationComponent,
    BloodCampsComponent,
    CampRegistrationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'dashboard',component:DashboardComponent},
      {path:'',component:HomeComponent},
      {path:'register',component:RegisterComponent},
      {path:'login',component:LoginComponent},
      {path:'donationRequest',component:DonarReistrationComponent}
    ]),
    BrowserAnimationsModule,
    ChartsModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
