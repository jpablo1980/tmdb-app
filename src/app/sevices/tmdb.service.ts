import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TmdbService {
  private BASE_URL = 'https://api.themoviedb.org/3/';
  private API_KEY: string;

  constructor(private httpClient: HttpClient) {
    this.API_KEY = environment.tmdbApiKey;
  }

  // tslint:disable-next-line:typedef
  getPopularMovies() {
    const url = this.buildUrl('movie/popular');
    return this.httpClient.get(url);
  }


  buildUrl(service: string, query: string | null = null): string {
    if (query) {
      return `${this.BASE_URL}${service}?${query}&api_key=${this.API_KEY}`;
    }
    return `${this.BASE_URL}${service}?api_key=${this.API_KEY}`;
  }


  // tslint:disable-next-line:typedef
  // for få detaljer for en film https://api.themoviedb.org/3/movie/464052?api_key=8700109c81bbe95a85a019a929a9e5b8
  // multi search https://api.themoviedb.org/3/search/multi?api_key=8700109c81bbe95a85a019a929a9e5b8&query=tom%20cruise&page=1

  // tslint:disable-next-line:typedef


}
