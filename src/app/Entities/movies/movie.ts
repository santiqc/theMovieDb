export class Movie {
    page:          number;
    results:       Result[];
    total_pages:   number;
    total_results: number;
  }
  
  export class Result {
    backdrop_path:     null | string;
    first_air_date:    Date;
    genre_ids:         number[];
    id:                number;
    name:              string;
    origin_country:    string[];
    original_language: string;
    original_name:     string;
    overview:          string;
    popularity:        number;
    poster_path:       string;
    vote_average:      number;
    vote_count:        number;
  }

  // detail search movie 
  export interface Searchmovie {
    page:          number;
    results:       Resultdetail[];
    total_pages:   number;
    total_results: number;
}

export interface Resultdetail {
    adult:             boolean;
    backdrop_path:     string;
    genre_ids:         number[];
    id:                number;
    original_language: OriginalLanguage;
    original_title:    string;
    overview:          string;
    popularity:        number;
    poster_path:       string;
    release_date:      Date;
    title:             string;
    video:             boolean;
    vote_average:      number;
    vote_count:        number;
}

export enum OriginalLanguage {
    En = "en",
    Ja = "ja",
    Zh = "zh",
}
