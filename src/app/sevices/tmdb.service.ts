import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TmdbService {
  URI: string = "";

  constructor(private httpClient: HttpClient) { 
    this.URI = "https://api.themoviedb.org/3/movie/popular?api_key="
  }

}
