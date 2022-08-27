import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { DetailMovie, detailSearchmovie } from '../detail-movie';
import { Movie, Searchmovie } from '../movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) { }

  //get movie popular
 public  getPopulars(): Observable<Movie[]>{
    return this.httpClient.get<Movie[]>(environment.URL).pipe(map(data => data['results']));
  }
//get detail movie popular
 public getDetailMovie(id: number): Observable<DetailMovie>{
    return this.httpClient.get<DetailMovie>(environment.detailMovie + id + '?' + environment.keyApi);
  }
//get movies global
 public searchMovie(query=''):Observable<Searchmovie[]>{
    return this.httpClient.get<Searchmovie[]>(environment.search + environment.keyApi+  '&query=' +query).pipe(map(data => data['results']));
  }
//get detail movie global
  public getDetailSearchMovie(id: number): Observable<detailSearchmovie>{
    return this.httpClient.get<detailSearchmovie>(environment.detailMovieSearch + id + '?' + environment.keyApi);
  }
  
}
