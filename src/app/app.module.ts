import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { BackEndService } from './services/back-end.service';
import { SideBarComponent } from './side-bar/side-bar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    SideBarComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [BackEndService],
  bootstrap: [AppComponent]
})
export class AppModule { }
