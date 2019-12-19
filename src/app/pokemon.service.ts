import { Injectable } from '@angular/core';
import { Identifiers } from '@angular/compiler';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pokemon } from './Pokemon';
import { Observable } from 'rxjs';
import { PokemonList } from './PokemonList';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private pokemon:Observable<Pokemon>;

  private pokemonsUrl = "https://pokeapi.co/api/v2/pokemon";

  getPokemon(id: number): Observable<Pokemon> {
    const url = `${this.pokemonsUrl}/${id}`;

    return this.http.get<Pokemon>(url);
    
  }


  getPokemons(page:string):Observable<PokemonList>{
    return this.http.get<PokemonList>(page);
  }
  getPokemonByName(name:string):Observable<Pokemon>{
    const url = `${this.pokemonsUrl}/${name}`;
    return this.http.get<Pokemon>(url);
  }
  getPokemonByUrl(url:string):Observable<Pokemon>{
   
    return this.http.get<Pokemon>(url);
  }


  constructor(private http: HttpClient) { }
}
