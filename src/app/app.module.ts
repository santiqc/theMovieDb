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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
// Import library module
import { NgxSpinnerModule } from "ngx-spinner";
import {
  SwiperModule, SwiperConfigInterface,
  SWIPER_CONFIG
} from 'ngx-swiper-wrapper';
import { SearchMovieComponent } from './Entities/movies/search-movie/search-movie.component';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  observer: true,
  direction: 'horizontal',
  threshold: 50,
  spaceBetween: 5,
  slidesPerView: 1,
  centeredSlides: true
};
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListMovieComponent,
    DetailMovieComponent,
    ListMovieComponent,
    HomeComponent,
    SearchMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxSpinnerModule,
    SwiperModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  entryComponents: [DetailMovieComponent],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
