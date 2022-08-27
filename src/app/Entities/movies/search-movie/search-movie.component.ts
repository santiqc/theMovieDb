import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, ParamMap, Router } from '@angular/router';
import { filter, map, take} from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Searchmovie } from '../movie';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {
  query: string;
  movies: Searchmovie[]=[];
  url= environment.seeImg;
  constructor(
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.getMovieByQuery();
    this.getSearchMovie();
    
  }
  //get movie in search
  handleSearch(value: string){
    console.log(value);
    this.movieService.searchMovie(value).subscribe(data => {
           this.movies = data;
        })
  }

//get name the movie in home
  private getMovieByQuery():void{
    this.activatedRoute.queryParams.pipe(take(1)).subscribe((params: ParamMap) => {
      console.log(params);
      this.query = params['query'];
      
    })
  }

//get name the search movie
   private getSearchMovie():void{
     this.movieService.searchMovie(this.query).subscribe(data => {
       this.movies = data;
     })
   }

}
