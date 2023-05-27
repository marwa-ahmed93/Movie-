import { RegisterComponent } from './register/register.component';
import { TrendingComponent } from './trending/trending.component';
import { NetworkComponent } from './network/network.component';
import { TvComponent } from './tv/tv.component';
import { MoviesComponent } from './movies/movies.component';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth.guard';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';


const routes: Routes = [

  {path: 'home' , canActivate:[AuthGuard] , component :HomeComponent } ,
  // {path: '' , component :HomeComponent } ,
  {path: '' , redirectTo : 'register' , pathMatch: 'full' } ,
  {path: 'about' , canActivate:[AuthGuard] , component :AboutComponent } ,
  {path: 'movies', canActivate:[AuthGuard]  , component :MoviesComponent } ,
  {path: 'tv' , canActivate:[AuthGuard] , component :TvComponent } ,
  {path: 'network', canActivate:[AuthGuard]  , component :NetworkComponent } ,
  {path: 'trending', canActivate:[AuthGuard]  , component :TrendingComponent } ,
  {path: 'login' , component :LoginComponent } ,
  {path: 'register' , component :RegisterComponent } ,
  {path:'**' , component :NotfoundComponent } ,

];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // import { AuthGuard } from './auth.guard';
exports: [RouterModule] ,

})
export class AppRoutingModule { }
