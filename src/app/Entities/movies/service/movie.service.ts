import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { DetailMovie } from '../detail-movie';
import { Movie } from '../movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) { }

 public  getPopulars(): Observable<Movie[]>{
    return this.httpClient.get<Movie[]>(environment.URL).pipe(map(data => data['results']));
  }

 public getDetailMovie(id: number): Observable<DetailMovie>{
    return this.httpClient.get<DetailMovie>(environment.detailMovie + id + '?' + environment.keyApi);
  }
  
}
