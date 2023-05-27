import { Component , OnDestroy } from '@angular/core';
import { MoviesService } from './../movies.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnDestroy {

  usersData:object[] = [];
  x:any="" ;
  trendingMovies:any[]=[];
  trendingTv:any[]=[];
  channel:any ;

  imgPrefix:string="https://image.tmdb.org/t/p/w500/" ;
  term:string="" ;
  constructor(_moviesService:MoviesService){
 
     this.channel = _moviesService.getTrandingMovies('movies').subscribe(
       (data)=>
       {

           this.trendingMovies = data.results.slice(0,10) ;
       } ,

     (error)=>
     {
          console.log("Connection error" + error);
     },
     ()=>
     {
       console.log("api finsh");
     }

     );

     _moviesService.getTrandingMovies('tv').subscribe(
      (data)=>
      {

          this.trendingTv = data.results.slice(0,10) ;
      } ,

    (error)=>
    {
         console.log("Connection error" + error);
    },
    ()=>
    {
      console.log("api finsh");
    }

    );
     
  }
   ngOnDestroy(){
    this.channel.unsubscribe();
   }

 
}
