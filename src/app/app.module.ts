import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MoviesComponent } from './movies/movies.component';
import { TrendingComponent } from './trending/trending.component';
import { NetworkComponent } from './network/network.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TvComponent } from './tv/tv.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HttpClientModule } from '@angular/common/http';
import { HelloPipe } from './hello.pipe';
import { GenderPipe } from './gender.pipe';
import { SearchPipe } from './search.pipe';
import { FormsModule } from '@angular/forms'; 


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    MoviesComponent,
    TrendingComponent,
    NetworkComponent,
    LoginComponent,
    RegisterComponent,
    TvComponent,
    NotfoundComponent,
    HelloPipe,
    GenderPipe,
    SearchPipe, 
  
    
    
  ],
  imports: [
  BrowserModule,
    AppRoutingModule ,
    HttpClientModule ,
    FormsModule ,
    ReactiveFormsModule ,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
