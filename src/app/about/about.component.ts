import { Component } from '@angular/core';
import { MoviesService } from './../movies.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent {
  // onSale:boolean = false ;
  // userAge:number = 25 ;
  // friends:string[]=[];
  // aboutUsers:object[] = [];
  constructor(_moviesService:MoviesService){

   // let _MoviesService = new MoviesService();


  }

}
