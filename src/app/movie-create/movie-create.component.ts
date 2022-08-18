import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from '../models/category';
import { Movie } from '../models/movie';
import { AlertifyService } from '../services/alertify.service';
import { CategoryService } from '../services/category.service';
import { MovieService } from '../services/movice.service';

@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.css'],
  providers: [CategoryService, MovieService],
})
export class MovieCreateComponent implements OnInit {
  categories: Category[];

  model: any = {
    categoryId:'',
  };
  constructor(
    private categoryService: CategoryService,
    private movieService: MovieService,
    private router: Router,
    private alertify: AlertifyService
  ) {}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  createMovie() {
    const movie = {
      id: 0,
      title: this.model.title,
      description: this.model.description,
      imageUrl: this.model.imageUrl,
      isPopular: false,
      datePublish: new Date().getTime(),
      categoryId: this.model.categoryId,
    };

    this.movieService.createMovie(movie).subscribe((data) => {
      this.router.navigate(['/movies', data.id]);
    });
  }
}
