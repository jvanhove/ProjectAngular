import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) { }
postMovie(watchitem: Movie): Observable<Movie> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    console.log("http://localhost:3000/watchlist", watchitem, {headers: headers})
    return this.httpClient.post<Movie>("http://localhost:3000/watchlist", watchitem, {headers: headers});
}
putMovie(id:number, watchitem: Movie): Observable<Movie> {
  let headers = new HttpHeaders();
  headers = headers.set('Content-Type', 'application/json; charset=utf-8');

  return this.httpClient.put<Movie>("http://localhost:3000/watchlist/" + id, watchitem, {headers: headers});
}

getMovieById(id: number): Observable<Movie> {
  return this.httpClient.get<Movie>("http://localhost:3000/watchlist/" + id);
}

deleteMovie(id: number): Observable<Movie> {
  return this.httpClient.delete<Movie>("http://localhost:3000/watchlist/" + id);
}
}
