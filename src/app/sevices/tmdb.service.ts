import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TmdbService {
  URI: string = "";

  constructor(private httpClient: HttpClient) {
    this.URI = "https://api.themoviedb.org/3/movie/popular?api_key="
  }

  getPopularMovie() {
    return this.httpClient.get(this.URI + environment.tmdbApiKey);
  }

}
