import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { HomeComponent } from './components/home/home.component';
import { JobComponent } from './components/job/job.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { HttpService } from './service/http.service';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule }   from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetailComponent } from './components/detail/detail.component';
import { HttpRequestInterceptor } from './interceptor/request.interceptor';
import { LoadingComponent } from './components/loading/loading.component';
import { SelectComponent } from './components/select/select.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    HomeComponent,
    JobComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    DetailComponent,
    LoadingComponent,
    SelectComponent,
    NotfoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
