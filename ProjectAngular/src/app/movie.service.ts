import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { HttpClient } from '@angular/common/http';
import { Observable, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movies: Movie[] = [];
  
  constructor(private httpClient: HttpClient) {
    let movie1: Movie = {
      id: 1,
      title: "Title movie",
      subtitle: "Subtitle movie",
      imageUrl: "https://images.pexels.com/photos/1202723/pexels-photo-1202723.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=134",
      imageCaption: "caption image",
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur voluptas sequi voluptatum pariatur! Quae cumque
      quidem dolor maxime enim debitis omnis nemo facilis sequi autem? Quae tenetur, repellat vero deleniti vitae
      dolores? Cum tempore, mollitia provident placeat fugit earum, sint, quae iusto optio ea officiis consectetur sit
      necessitatibus itaque explicabo?`,
      author: "Michaël Cloots",
      publishDate: "28/11/2020"

    };

    let movie2: Movie = {
      id: 2,
      title: "Title movie 2",
      subtitle: "Subtitle movie 2",
      imageUrl: "https://images.pexels.com/photos/3422964/pexels-photo-3422964.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=134",
      imageCaption: "caption image 2",
      content: `2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur voluptas sequi voluptatum pariatur! Quae cumque
      quidem dolor maxime enim debitis omnis nemo facilis sequi autem? Quae tenetur, repellat vero deleniti vitae
      dolores? Cum tempore, mollitia provident placeat fugit earum, sint, quae iusto optio ea officiis consectetur sit
      necessitatibus itaque explicabo?`,
      author: "Florian Smeyers",
      publishDate: "30/11/2020"

    };

    this.movies.push(movie1);
    this.movies.push(movie2);

  }

  getMovies(): Observable<Movie[]>{
    return timer(1, 3000).pipe(switchMap(() => this.httpClient.get<Movie[]>("https://api.themoviedb.org/3/movie/popular?api_key=8a31694e372bf87df346f81ef6bd7705&language=en-US&page=1")));
  }

  // getMovieById(id: number) : Movie | null {
  //   return  timer(1, 3000).pipe(switchMap(() => this.httpClient.get<Movie>("http://localhost:3000/movie")));
  // }

}