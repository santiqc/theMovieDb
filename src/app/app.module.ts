import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListMovieComponent } from './Entities/movies/list-movie/list-movie.component';
import { MovieServiceComponent } from './Entities/movies/service/movie-service/movie-service.component';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';
import { HttpClientModule  } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './Layouts/navbar/navbar.component';
import { DetailMovieComponent } from './Entities/movies/detail-movie/detail-movie.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListMovieComponent,
    DetailMovieComponent,
    MovieServiceComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
