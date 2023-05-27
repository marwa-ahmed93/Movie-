import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isLogin:boolean = false;

  constructor(private _AuthService:AuthService)
  {
    _AuthService.currentUserData.subscribe(()=>{
      if(_AuthService.currentUserData.getValue() == null)
      {
             this.isLogin = false ;
      }
      else
      {
        this.isLogin = true ;
      }
    });
   

  }
}
