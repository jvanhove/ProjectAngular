import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies$: Observable<Movie[]> = new Observable<Movie[]>();
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movies$ = this.movieService.getMovies();
  }
  search() {
    alert("This is an event binding!");
  }

}