import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
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
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,

  ) { }

  ngOnInit(): void {
    this.veePupulars();
  }
//get list movie popular
  veePupulars() {
    this.movieService.getPopulars().subscribe(data => {
      this.movies = data;
    },(err) => {
      this.spinner.hide();
      this.toastr.error(err, 'Fail', {
        timeOut: 3000,  positionClass: 'toast-top-center',
      });
      //console.log(err);
    })
  }


}
