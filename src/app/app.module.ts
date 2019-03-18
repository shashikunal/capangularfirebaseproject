import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes  } from '@angular/router';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { courseComponent } from './courses.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { customDirective } from './custom.directive';
import { RouteGuard } from './auth/route-guard';
import { NotificationComponent } from './notification/notification.component';


const Router:Routes = [
  {path:'home' , component:HomeComponent , },
  {path:'about' , component:AboutComponent , canActivate:[RouteGuard]},
  {path:'contact' , component:ContactComponent , canActivate:[RouteGuard]},
  {path:'login' , component:LoginComponent},
  {path:'register' , component:RegisterComponent},
  {path:'**' , component:PagenotfoundComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    courseComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    HeaderComponent,
    ContactComponent,
    PagenotfoundComponent,
    customDirective,
    NotificationComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(Router)

  ],
  providers: [RouteGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
