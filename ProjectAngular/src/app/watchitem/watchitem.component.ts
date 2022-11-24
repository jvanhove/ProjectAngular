import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
@Component({
  selector: 'app-watchitem',
  templateUrl: './watchitem.component.html',
  styleUrls: ['./watchitem.component.css']
})
export class WatchitemComponent implements OnInit {
  @Input() movie: Movie = { id: 0, title: "", poster_path: "/kyCzpKpuF32nRl1QQgXqcQnnLAj.jpg", overview: "", vote_average: 0, vote_count: 0, release_date: "", genre_ids: [0] };
  apikey = "8a31694e372bf87df346f81ef6bd7705"
  deleteCategorie$: Subscription = new Subscription();
  errorMessage: string = '';  
  constructor(private httpClient: HttpClient, private movieService: MovieService) { }


  ngOnInit(): void {
  }

  addToWatchlist(movie: Movie) {
    this.movieService.postWatchitem(movie)
      .subscribe(data => {
        console.log(data)
      })
  }
  removeFromWatchlist(movieId: number) {
    this.deleteCategorie$ = this.movieService.deleteWatchitem(movieId).subscribe({
      next: (v) => this.movieService.getWatchlist(""),
      error: (e) => this.errorMessage = e.message
    });
    
  }
 
}
