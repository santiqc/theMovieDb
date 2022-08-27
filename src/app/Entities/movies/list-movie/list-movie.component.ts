import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment.prod';
import { Movie } from '../movie';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.css']
})
export class ListMovieComponent implements OnInit {
  url= environment.seeImg;
  movies: Movie[];
  constructor(
    private movieService: MovieService,
    private modalService: NgbModal

  ) { }

  ngOnInit(): void {
    this.veePupulars();
  }

  veePupulars() {
    this.movieService.getPopulars().subscribe(data => {
      this.movies = data;
    });
  }


}
