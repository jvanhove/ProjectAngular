import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { Observable, Subscription } from 'rxjs';
@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit,OnDestroy {
  searchTerm: String = '';
  movies: Movie[] = [];
  subscription!: Subscription;
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.refreshWatchlist();
  }
  refreshWatchlist() {
    this.movieService.getWatchlist()
      .subscribe(data => {
        console.log(data)
        this.movies=data;
      })      
  }
  onSubmit(): void {
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe;
  }

}
