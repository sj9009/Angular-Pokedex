import { Component, OnInit } from '@angular/core';
import { combineLatest, switchMap } from 'rxjs';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})

export class PokemonListComponent implements OnInit {
  
  pokemons = this.dataService.getPokemons()
  .pipe(switchMap((x: { results: any[] }) =>
      combineLatest(x.results.map((result) => 
        this.dataService.getMoreData(result.name))
      )),
  );

  fetching = false;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {}
  
  onScroll(event: any) {
    if(!this.fetching)
      if(event.target && event.srcElement?.scrollTop >
          (event.srcElement.scrollHeight - event.srcElement.offsetHeight) * 8 / 10) {
            this.fetching = true;
            // TODO : Load More Prokemns
            console.log(' Load More Prokemns');
          }
  }
}