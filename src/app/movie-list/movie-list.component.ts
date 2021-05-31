import {Component, OnInit} from '@angular/core';
import {TmdbService} from '../sevices/tmdb.service';
import { Router} from '@angular/router';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})

export class MovieListComponent implements OnInit {
  movies: any[] = [];
  pictures: any[] = [];

  constructor(private tmdbService: TmdbService, private router: Router) {
  }

  ngOnInit(): void {
    this.tmdbService.getPopularMovies()
      .subscribe((response: any) => {
          this.movies = response.results;
        });
  }

  movieDetailPage(pageName:string, movie:object):void{
    this.router.navigate([`${pageName}`])    
    this.tmdbService.setMovie(movie);
  }
}
