import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailMovieComponent } from './Entities/movies/detail-movie/detail-movie.component';
import { SearchMovieComponent } from './Entities/movies/search-movie/search-movie.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent
  },
  {
    path: 'detail/:id',
    component: DetailMovieComponent
  },
  { 
    path: 'search-movie', 
    component: SearchMovieComponent
  },
  {
    path: '**', 
    redirectTo: '',
    pathMatch: 'full'
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
