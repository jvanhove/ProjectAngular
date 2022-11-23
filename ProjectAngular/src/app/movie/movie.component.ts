import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../movie';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input() movie: Movie = {id: 0, title: "", subtitle: "", imageUrl: "", imageCaption: "", content: "", author: "", publishDate: ""};
  apikey="8a31694e372bf87df346f81ef6bd7705"
  constructor() { }

  ngOnInit(): void {
  }
}
