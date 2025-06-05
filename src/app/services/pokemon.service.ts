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
  private baseURL: string = environment.pokeApi;
  private MAX_ID = 1025;
  private MIN_ID = 1;

  constructor(private http: HttpClient) {}

  getPokemon(pokemonName: String): Observable<PokemonData> {
    return this.http.get<PokemonData>(`${this.baseURL}${pokemonName}`);
  }

  incrementId() {
    const nextId = this.currentId.value + 1;
    //Caso passar o máximo da lista, e então ir para o primeiro
    this.currentId.next(nextId > this.MAX_ID ? this.MIN_ID : nextId);
  }

  decrementId() {
    const prevId = this.currentId.value - 1;
    //Mesma coisa mas ao contrário
    this.currentId.next(prevId < this.MIN_ID ? this.MAX_ID : prevId);
  }

  randomId() {
    const randomId = Math.floor(Math.random() * this.MAX_ID) + this.MIN_ID;
    this.currentId.next(randomId);
  }

  getCurrentId() {
    return this.currentId.asObservable();
  }

  setCurrentId(newId: number) {
    if (newId >= this.MIN_ID && newId <= this.MAX_ID && newId !== this.currentId.value) {
      this.currentId.next(newId);
    }
  }  
}