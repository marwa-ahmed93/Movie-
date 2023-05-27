import { Component } from '@angular/core';
import { FormControl , FormGroup , Validators } from '@angular/forms';
import { AuthService } from './../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

constructor(private _AuthService:AuthService,private _Router:Router )
{

}

error:string = "";


  registerform:FormGroup = new FormGroup({
      
    first_name:new FormControl(null ,[Validators.required ,Validators.minLength(3), Validators.maxLength(10)]),
    last_name:new FormControl(null ,[Validators.required ,Validators.minLength(3), Validators.maxLength(10)]) ,
    age:new FormControl(null ,[Validators.required ,Validators.min(10), Validators.max(80)]) ,
    email:new FormControl(null ,[Validators.required ,Validators.email]) ,
    password:new FormControl(null ,[Validators.required ,Validators.pattern('^[a-zA-Z0-9]{3,10}$')]) ,


  });

  onSubmit(registerform:FormGroup) {
    // TODO: Use EventEmitter with form value
//   console.warn(this.registerform.value);
         if(registerform.valid){

          // this._AuthService.register(registerform.value).subscribe((response)=>{
          //   if(response.message === "success")
          //   {
          //        this._Router.navigate(['/login'])
          //   } 
          //   else
          //   {
          //       this.error = response.message ;
          //   }
          // });

         } 
        
  }
 
    
}
