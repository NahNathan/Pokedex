import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PokemonService } from '../services/pokemon.service';
import { PokemonData } from '../models/pokemonData';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})


export class CardComponent implements OnInit, OnDestroy{
  pokemon:PokemonData={
    id:9,
    name:'',
    sprites:{
      front_default:''
    },
    types:[]
  }
  private idSubscription?: Subscription;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.idSubscription = this.pokemonService.getCurrentId().subscribe(id => {
      this.getPokemon(id.toString());
    });
  }

  ngOnDestroy(): void {
    if (this.idSubscription) {
      this.idSubscription.unsubscribe();
    }
  }

  getPokemon(searchName:string){
    this.pokemonService.getPokemon("/"+searchName).subscribe({
      next:(res) =>{

        this.pokemon={
          id:res.id,
          name:res.name,
          sprites: res.sprites,
          types: res.types
        }
      },
      error:(err) => console.log('not found')
    })
      
  }
}
