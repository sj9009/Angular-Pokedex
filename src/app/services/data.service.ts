import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  getPokemons() {
      return this.http.get<{ results: any[]}>(`https://pokeapi.co/api/v2/pokemon?limit=15`);
  }
  getMoreData(name: string) {
    return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${name}`)
  }
}
