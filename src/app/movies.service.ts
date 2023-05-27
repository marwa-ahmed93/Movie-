import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' ;
import {Observable} from 'rxjs' ;
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(public _HttpClient:HttpClient) {


   }
  getTrandingMovies(mediaType:string):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/all/day?api_key=5572f5f3095183ff80be4be708492c27`);
  
  }


  // users:object[] = 
  // [
  //       {name: 'ahmed' , age:25 , gender:'male' , salary:400 , datOfBarth:'1/2/1999'},
  //       {name: 'amr' , age:25 , gender:'male' , salary:400 , datOfBarth:'1/2/1999'},
  //       {name: 'walied' , age:25 , gender:'male' , salary:400 , datOfBarth:'1/2/1999'},
  //       {name: 'mohamed' , age:25 , gender:'male' , salary:400 , datOfBarth:'1/2/1999'},
  //       {name: 'nour' , age:25 , gender:'male' , salary:400 , datOfBarth:'1/2/1999'}, 
  // ] ;

  

}
