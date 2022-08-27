import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';
import { HttpClientModule  } from '@angular/common/http';
import { NavbarComponent } from './Layouts/navbar/navbar.component';
import { ListMovieComponent } from './Entities/movies/list-movie/list-movie.component';
import { DetailMovieComponent } from './Entities/movies/detail-movie/detail-movie.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListMovieComponent,
    DetailMovieComponent,
    ListMovieComponent,
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
