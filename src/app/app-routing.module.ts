import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieCreateComponent } from './movie-create/movie-create.component';
import { MoviesDetailsComponent } from './movies-details/movies-details.component';
import { MoviesComponent } from './movies/movies.component';

const routes: Routes = [
  { path: 'movies', component: MoviesComponent },
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
  { path: 'movies/category/:categoryId', component: MoviesComponent },
  { path: 'movies/create', component: MovieCreateComponent },
  { path: 'movies/:movieId', component: MoviesDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
