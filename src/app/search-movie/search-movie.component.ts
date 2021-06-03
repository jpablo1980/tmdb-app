import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../sevices/tmdb.service';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss'],
})
export class SearchMovieComponent implements OnInit {
  constructor(private tmdbService: TmdbService) {}
  searching: string = "";
  results: any[] = [];
  display: Boolean =  false;

  ngOnInit(): void {}
  
  onPress() {
    this.display = !this.display;
    }


  getSearch(searchQuery: string) {
    this.tmdbService
      .searchEverything(searchQuery)
      .subscribe((response: any) => {
        this.results = response.results;      
      });
  }

  search(event: any) {
    event.stopPropagation();
    this.searching =  event.target.value;
    this.getSearch(this.searching);
    this.display = false;
    console.log(this.searching);
  }
}
