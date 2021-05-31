import {Component, OnInit} from '@angular/core';
import {TmdbService} from '../sevices/tmdb.service';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})

export class MovieListComponent implements OnInit {
  movies: any[] = [];
  pictures: any[] = [];

  constructor(private tmdbService: TmdbService) {
  }

  ngOnInit(): void {
    this.tmdbService.getPopularMovies()
      .subscribe((response: any) => {
          console.log(response);
          this.movies = response.results;
          console.log(this.movies);
        });
  }
}
