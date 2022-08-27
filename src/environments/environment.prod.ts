export const environment = {
  production: true,
  // link de obtener la pagina 1 de peliculas populares
  URL: 'https://api.themoviedb.org/3/tv/popular?api_key=7e4a262453f6a9e56fb2d6f93dbc548e&language=es-ES&page=1',
//  link del detalle de la pelicula popular
  detailMovie: 'https://api.themoviedb.org/3/tv/',
  // link de la clave de la api y el lenguaje español
  keyApi: 'api_key=7e4a262453f6a9e56fb2d6f93dbc548e&language=es-Es',
  // link de complementar url para ver imagen
  seeImg: 'https://image.tmdb.org/t/p/w440_and_h660_face',
  //link de la busqueda de peliculas por nombre de todas las peliculas
  search: 'https://api.themoviedb.org/3/search/movie?',
  //link del detalle de la busqueda de peliculas por nombre
  detailMovieSearch:'https://api.themoviedb.org/3/movie/',
};
