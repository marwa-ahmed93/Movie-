import { Component } from '@angular/core';
import { FormControl , FormGroup , Validators } from '@angular/forms';
import { AuthService } from './../auth.service';
import { Router } from '@angular/router';

// import { threadId } from 'worker_threads';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private _AuthService:AuthService,private router:Router ){}

  error:string = "";
  
  
    loginform:FormGroup = new FormGroup({
  
      email:new FormControl(null ,[Validators.required ,Validators.email]) ,
      password:new FormControl(null ,[Validators.required ,Validators.pattern('^[a-zA-Z0-9]{3,10}$')]) ,
  
  
    });
  
    submitForm(loginform: FormGroup) {
      // TODO: Use EventEmitter with form value
  //   console.warn(this.loginform.value);
           if(loginform.valid){
           
            this._AuthService.login(loginform.value).subscribe((response) => {

             
              
              if(response.success === "true")
              {
                
                   this.router.navigate(['/home']);
                   console.log("b7bk");
                   localStorage.setItem("currentUser" , response.token);
                // this._AuthService.saveCurrentUserData();
                  
              }
              // if(response.success === "true")
              // {
              //   //  this.checked=false;
              //   //  localStorage.setItem("TOKEN" , response.token);
              //    this.router.navigate(['/home']);
                 
              // } 
              else
              {
                  this.error = response.message ;
              }
            })
  
           } 
      
    }
  }


