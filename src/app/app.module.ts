import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import {AF} from "./providers/af";
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyCLcZnN_pTLwdJ-t6hcYAntEMjtMMicDfw',
  authDomain: "angularfirebase-884d4.firebaseapp.com",
  databaseURL: "https://angularfirebase-884d4.firebaseio.com",
  storageBucket: "angularfirebase-884d4.appspot.com",
  messagingSenderId: "10799074907"
};

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent
  ],
  providers: [AF],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(routes),
    MaterialModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
