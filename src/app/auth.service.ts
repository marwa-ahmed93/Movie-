import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable , BehaviorSubject} from 'rxjs';
// import jwt_decode from "jwt-decode";
import jwtDecode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private _HttpClient:HttpClient){ }

  currentUserData:any = new BehaviorSubject(null) ;
  
    register(formData:any):Observable<any> 
    {
     return this._HttpClient.post('http://localhost/bookstore/public/api/registerai' , formData);
    }

    login(formData:any):Observable<any>
     {
       return this._HttpClient.post('http://localhost/bookstore/public/api/login' , formData)
    }

    saveCurrentUserData()
    {
      let enCodedToken:any = localStorage.getItem('currentUser');
      console.log("encoded token");
      console.log(enCodedToken);
      let decodeToken = jwtDecode(enCodedToken);
      this.currentUserData.next(decodeToken);
    }
}
