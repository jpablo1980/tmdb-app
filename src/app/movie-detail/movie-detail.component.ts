import { Component, OnInit } from '@angular/core';
import {TmdbService} from '../sevices/tmdb.service';


@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit {
  movie: object = {};
  
  constructor(private tmdbService: TmdbService) { }

  ngOnInit(): void {
    this.movie = this.tmdbService.getMovie()
    console.log(this.movie);
  }

}
