import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input() movie: Movie = {id: 0, title: "", poster_path:"/kyCzpKpuF32nRl1QQgXqcQnnLAj.jpg", overview:"", vote_average:0, vote_count:0, release_date:"", genre_ids:[0]};
  apikey="8a31694e372bf87df346f81ef6bd7705"
  constructor(private httpClient: HttpClient, private movieService: MovieService) { }

  ngOnInit(): void {
  }

  addToWatchlist(movie:Movie){
    this.movieService.postWatchitem(movie)
    .subscribe(data => {
      console.log(data)
    })  
    // let headers = new HttpHeaders();
    // headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    
    // console.log("http://localhost:3000/watchlist/", this.watchitem, {headers: headers})
    // return this.httpClient.post<Watchitem>("http://localhost:3000/watchlist/", this.watchitem, {headers: headers});
}
}
