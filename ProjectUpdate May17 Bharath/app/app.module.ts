import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmployComponent } from './employ/employ.component';
import { LoginReactiveComponent } from './login-reactive/login-reactive.component';
import { EmployReactiveComponent } from './employ-reactive/employ-reactive.component';
import { MenuComponent } from './menu/menu.component';
import { LoginMenuComponent } from './login-menu/login-menu.component';
const appRoutes : Routes = [
  {path:'',component:LoginMenuComponent},
  {path:'menu',component:MenuComponent,
  children : [
    {path:'login',component:LoginComponent,outlet:'data'},
  {path:'loginreactive',component:LoginReactiveComponent,outlet:'data'},
{path:'employ',component:EmployComponent,outlet:'data'},
  {path:'employreactive',component:EmployReactiveComponent,outlet:'data'},
  

  ]
}
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployComponent,
    LoginReactiveComponent,
    EmployReactiveComponent,
    MenuComponent,
    LoginMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
