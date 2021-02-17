import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TmdbService {
  private BASE_URL = 'https://api.themoviedb.org/3/';
  private URI = 'https://api.themoviedb.org/3/movie/popular?api_key=';
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
}
