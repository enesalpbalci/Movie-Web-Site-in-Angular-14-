import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, delay, map, tap } from 'rxjs/operators';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  url = 'http://localhost:3000/movies';
  url_firebase = 'https://angular-movie-app-39297-default-rtdb.firebaseio.com/';

  constructor(private http: HttpClient) {}

  getMovies(categoryId: any): Observable<Movie[]> {
    return this.http
      .get<Movie[]>(this.url_firebase + 'movies.json')
      .pipe(
        map((response) => {
          const movies: Movie[] = [];
          for (const key in response) {
            if (categoryId) {
              if (categoryId === response[key].categoryId) {
                movies.push({ ...response[key], id: key });
              } 
            }
            else {
              movies.push({ ...response[key], id: key });
            }
          }
          return movies;
        }),
        tap((data) => console.log(data)),
        catchError(this.handleError),
        delay(500)
      );
  }

  getMovieById(movieId: string): Observable<Movie> {
    return this.http
      .get<Movie>(this.url_firebase + 'movies/' + movieId + '.json')
      .pipe(
        tap((data) => console.log(data)),
        catchError(this.handleError),
        delay(500)
      );
  }

  createMovie(movie: Movie): Observable<Movie> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Contetn-Type': 'application/json',
        Authorization: 'Token',
      }),
    };
    return this.http
      .post<Movie>(this.url_firebase + '/movies.json', movie, httpOptions)
      .pipe(
        tap((data) => console.log(data)),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      //client ya da netwok
      console.log('error: ' + error.error.message);
    } else {
      //backend
      switch (error.status) {
        case 404:
          console.log('Not Found');
          break;
        case 403:
          console.log('access deined');
          break;
        case 500:
          console.log('interval server');
          break;
        default:
          console.log('Bilinmeyen bir hata');
      }
    }

    return throwError('bir hata oluştu');
  }
}
