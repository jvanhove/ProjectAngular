import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, timer } from 'rxjs';
import { repeatWhen, subscribeOn, switchMap, takeUntil } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movies: Movie[] = [];
  constructor(private httpClient: HttpClient) {
  }
  getWatchlist(searchTerm: String): Observable<any> {
    if(searchTerm==""){
      return this.httpClient.get<any>("http://localhost:3000/watchlist");
    }
    return this.httpClient.get<any>("http://localhost:3000/watchlist?title_like=" + searchTerm);
  };
  getSeen(searchTerm: String): Observable<any> {
    if(searchTerm==""){
      return this.httpClient.get<any>("http://localhost:3000/seen");
    }
    return this.httpClient.get<any>("http://localhost:3000/seen?title_like=" + searchTerm);
  };
    
  getMovies(searchTerm: String): Observable<any> {
      if(searchTerm==""){

        return this.httpClient.get<any>("https://api.themoviedb.org/3/movie/popular?api_key=8a31694e372bf87df346f81ef6bd7705&language=en-US&page=1");
      }
    return this.httpClient.get<any>("https://api.themoviedb.org/3/search/movie?api_key=8a31694e372bf87df346f81ef6bd7705&query=" + searchTerm);
  }
  postSeen(watchitem: Movie): Observable<Movie> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    console.log("http://localhost:3000/seen", watchitem, {headers: headers})
    return this.httpClient.post<Movie>("http://localhost:3000/seen", watchitem, {headers: headers});
}
putWatchitem(id: number,watchitem: Movie): Observable<Movie> {
  let headers = new HttpHeaders();
  headers = headers.set('Content-Type', 'application/json; charset=utf-8');
  console.log("http://localhost:3000/watchlist", watchitem, {headers: headers})
  return this.httpClient.put<Movie>("http://localhost:3000/watchlist/"+id,watchitem, {headers: headers});
}
  postWatchitem(watchitem: Movie): Observable<Movie> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    console.log("http://localhost:3000/watchlist", watchitem, {headers: headers})
    return this.httpClient.post<Movie>("http://localhost:3000/watchlist", watchitem, {headers: headers});
}deleteSeenitem(id: number): Observable<any> {
  return this.httpClient.delete<any>("http://localhost:3000/seen/" + id);
}
deleteWatchitem(id: number): Observable<any> {
  return this.httpClient.delete<any>("http://localhost:3000/watchlist/" + id);
}
  // getMovieById(id: number) : Movie | null {
  //   return  timer(1, 3000).pipe(switchMap(() => this.httpClient.get<Movie>("http://localhost:3000/movie")));
  // }
  // searchMovies(searchTerm: any): Observable<any>{


  // }

}