import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from '../Pokemon';
import { PokemonService } from '../pokemon.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ThrowStmt } from '@angular/compiler';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit {
  private spriteUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
  pickedPokemon:Pokemon;
  opponent:Pokemon;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private pokemonService: PokemonService,
    private location: Location

  ) { }

  ngOnInit() {
      let id = Math.floor(Math.random() * 955);
      // let id = 99;
    this.getPokemon(id, true);
    let idPicked = +this.route.snapshot.paramMap.get('id');
    this.getPokemon(idPicked, false);


  }
  getPokemon(id:number, opponent:boolean): void{
  
      this.pokemonService.getPokemon(id)
        .subscribe(p => {
          p.sprite = `${this.spriteUrl}/${id}.png`;
          if(opponent){
            
            this.opponent = p;
          } else {
            this.pickedPokemon = p;
          }
        });
    }
    fight():void {
      if(this.opponent.base_experience ===this.pickedPokemon.base_experience){
        alert("Draw");
  
      }
      else if(this.opponent.base_experience < this.pickedPokemon.base_experience)
      {
        alert("WON");

      }
      else{
        alert("LOST")
      }
      this.router.navigate(['/pokemons']);

    }
}
