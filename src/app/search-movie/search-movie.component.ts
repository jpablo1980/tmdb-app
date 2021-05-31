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
        this.searching = response.results;
        console.log(this.searching);
      });
  }

  search(event: any) {
    this.searching =  event.target.value.toLowerCase();
    this.getSearch(this.searching);
    console.log(this.searching);
  }
}
