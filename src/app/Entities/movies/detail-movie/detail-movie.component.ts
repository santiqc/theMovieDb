import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment.prod';
import { DetailMovie, detailSearchmovie } from '../detail-movie';
import { Movie, Searchmovie } from '../movie';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.css'],
})
export class DetailMovieComponent implements OnInit {
  url = environment.seeImg;
  movie: Movie[];
  detailMovie: DetailMovie;
  searchMovie: detailSearchmovie;

  private id = this.activatedRoute.snapshot.params['id'];

  constructor(
    private movieService: MovieService,
    private activatedRoute: ActivatedRoute,
    private spinner: NgxSpinnerService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.spinner.show();
    this.detailMoviePopular();
    this.detailMovieSearch();
  }
  //get detail movie popular
  detailMoviePopular(): void {
    this.movieService.getDetailMovie(this.id).subscribe(
      (data) => {
        this.spinner.hide();
        this.detailMovie = data;
        //console.log(this.detailMovie);
      },
      (err) => {
        this.spinner.hide();
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        //this.router.navigate(['/']);
        //console.log(err);
      }
    );
  }
  //get detail movie search
  detailMovieSearch(): void {
    this.movieService.getDetailSearchMovie(this.id).subscribe(
      (data) => {
        this.spinner.hide();
        this.searchMovie = data;
        //console.log(this.searchMovie);
      },
      (err) => {
        this.spinner.hide();
        this.toastr.error(err, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        

      }
    );
  }
  //back to list movie pupular
  goBack(): void {
    this.router.navigate(['/']);
  }
}
