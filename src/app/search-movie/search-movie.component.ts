import { Component, OnInit } from '@angular/core';
import {TmdbService} from '../sevices/tmdb.service';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss']
})
export class SearchMovieComponent implements OnInit {

  constructor(private tmdbService: TmdbService) { }

  ngOnInit(): void {
  }

}
