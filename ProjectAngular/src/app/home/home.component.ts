import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  searchTerm: String = '';
  movies: Movie[] = [];
  subscription!: Subscription;
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.subscription = this.movieService.getMovies("").subscribe(data => this.movies = data.results);
    
  }
  
  onSubmit(): void {
    this.movieService.getMovies(this.searchTerm).subscribe(data => this.movies = data.results);;
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe;
  }
}