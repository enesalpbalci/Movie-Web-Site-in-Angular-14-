import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MoviesComponent } from './movies/movies.component';
import { MoviesDetailsComponent } from './movies-details/movies-details.component';
import { CategoryComponent } from './category/category.component';
import { FooterComponent } from './footer/footer.component';
import { SummaryPipe } from './pipes/summary.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MovieFilterPipe } from './pipes/movie-filter.pipe';
import { AlertifyService } from './services/alertify.service';
import { HttpClientModule } from '@angular/common/http';
import { CategoryService } from './services/category.service';
import { MovieCreateComponent } from './movie-create/movie-create.component';
import { CategoryCreateComponent } from './category-create/category-create.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MoviesComponent,
    MoviesDetailsComponent,
    CategoryComponent,
    FooterComponent,
    SummaryPipe,
    MovieFilterPipe,
    MovieCreateComponent,
    CategoryCreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [AlertifyService],
  bootstrap: [AppComponent],
})
export class AppModule {}
