import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TmdbService {
    private URI = 'https://api.themoviedb.org/3/movie/popular?api_key=';


  constructor(private httpClient: HttpClient) {
  }

  // tslint:disable-next-line:typedef
  getPopularMovies() {
    return this.httpClient.get(this.URI + environment.tmdbApiKey);
  }

}
