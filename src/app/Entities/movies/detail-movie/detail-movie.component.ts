import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { DetailMovie } from '../detail-movie';
import { Movie } from '../movie';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.css']
})
export class DetailMovieComponent implements OnInit {
  url= environment.seeImg;
  movie: Movie[];
  detailMovie: DetailMovie;
  constructor(
    private movieService: MovieService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.movieService.getDetailMovie(id).subscribe(data => {
        this.detailMovie = data;
        console.log(this.detailMovie);
      }
    );
  }

}
