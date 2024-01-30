import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment } from 'src/app/environments/environments'
import {PokemonData} from'../models/pokemonData'
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private currentId = new BehaviorSubject<number>(1);
  private baseURL: string=""
  private pokeData: PokemonData | any

  constructor(
    private http:HttpClient
  ) {
    this.baseURL = environment.pokeApi
   }

  getPokemon(pokemonName:String):Observable<PokemonData>{
    this.pokeData = this.http.get<PokemonData>(`${this.baseURL}${pokemonName}`)
    return this.pokeData
  }

  incrementId() {
    this.currentId.next(this.currentId.value + 1);
  }
  decrementId() {
    this.currentId.next(this.currentId.value - 1);
  }
  randomId() {
    const randomId = Math.floor(Math.random() * 1016) + 1;
    this.currentId.next(randomId);
  }
  

  getCurrentId() {
    return this.currentId.asObservable();
  }
}
