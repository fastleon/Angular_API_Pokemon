import { SelectorMatcher } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit{ 

  name!: string
  urlImage! : string
  constructor(private pokemonService : PokemonService){}

  ngOnInit(): void{
  }

  search(){
    this.pokemonService.getPokemon(this.name.toLowerCase()).subscribe((data:any) => {
      console.log(data) // se puede ver desde F12 herramientas de desarrollador
      this.urlImage = data.sprites.front_default
    })
  }
}
