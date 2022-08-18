import { Movie } from './movie';

export class MovieRepository {
  private movies: Movie[];
  constructor() {}

  getMovies(): Movie[] {
    return this.movies;
  }

  getPopularMovies(): Movie[] {
    return this.movies.filter((res) => res.isPopular);
  }

  getMovieById(id: number): Movie {
    return this.movies.find((i) => i.id == id);
  }
}
