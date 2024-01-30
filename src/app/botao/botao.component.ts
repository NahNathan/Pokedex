import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PokemonService } from '../services/pokemon.service'

@Component({
 selector: 'app-botao',
 templateUrl: './botao.component.html',
 styleUrls: ['./botao.component.css']
})
export class BotaoComponent implements OnInit {

 ngOnInit(): void {
 }
 constructor(private pokemonService: PokemonService) {}

  incrementId() {
    this.pokemonService.incrementId();
  }
  decrementId() {
    this.pokemonService.decrementId();
  }
  randomId() {
    this.pokemonService.randomId();
  }
 
 @Output() increment = new EventEmitter<void>();
 
}