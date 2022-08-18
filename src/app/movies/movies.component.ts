import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../models/movie';
import { MovieRepository } from '../models/movie-repository';
import { AlertifyService } from '../services/alertify.service';
import { MovieService } from '../services/movice.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers: [MovieService],
})
export class MoviesComponent implements OnInit {
  title = 'Film Listesi';
  movies: Movie[] = [];
  popularMovies: Movie[] = [];
  movieRepository: MovieRepository;

  filterText: string = '';
  errorMessage: any;
  constructor(
    private alertify: AlertifyService,
    private movieService: MovieService,
    private activatedRoute: ActivatedRoute
  ) {
    // this.popularMovies = this.movieRepository.getPopularMovies();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.movieService.getMovies(params['categoryId']).subscribe(
        data => {
          this.movies = data;
        },
        error => {
          this.errorMessage = error;
        }
      );
    });
  }

  addToList($event: any, movie: Movie) {
    if ($event.target.classList.contains('btn-primary')) {
      $event.target.innerText = 'Remove to List';
      $event.target.classList.remove('btn-primary');
      $event.target.classList.add('btn-danger');
      this.alertify.success(movie.title + 'add to list');
    } else {
      $event.target.innerText = 'Add to List';
      $event.target.classList.remove('btn-danger');
      $event.target.classList.add('btn-primary');
      this.alertify.error(movie.title + ' remove to list');
    }
  }
}
