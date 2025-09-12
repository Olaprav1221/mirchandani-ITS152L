import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';            // ✅ for ngModel
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';          // ✅ for routerLink

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { ListPostsComponent } from './components/list-posts/list-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterPageComponent,
    ListPostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,          // ✅ enables [(ngModel)]
    HttpClientModule,     // ✅ enables HttpClient
    RouterModule          // ✅ enables [routerLink]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
