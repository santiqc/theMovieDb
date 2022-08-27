// detail movie populars
export class DetailMovie {
  adult: boolean;
  backdrop_path: string;
  homepage: string;
  id: number;
  in_production: boolean;
  last_air_date: Date;
  name: string;
  number_of_episodes: number;
  number_of_seasons: number;
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
}


// detail movie global

export interface detailSearchmovie {
  adult:                 boolean;
  backdrop_path:         string;
  belongs_to_collection: null;
  budget:                number;
  homepage:              string;
  id:                    number;
  imdb_id:               string;
  original_language:     string;
  original_title:        string;
  overview:              string;
  popularity:            number;
  poster_path:           string;
  release_date:          Date;
  revenue:               number;
  runtime:               number;
  status:                string;
  tagline:               string;
  title:                 string;
  video:                 boolean;
  vote_average:          number;
  vote_count:            number;
}