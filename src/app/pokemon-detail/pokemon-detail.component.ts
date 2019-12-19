import { Component, OnInit, Input, ɵConsole } from '@angular/core';
import { Pokemon } from '../Pokemon';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {


  @Input() pokemon: Pokemon;
  private spriteUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
  id:number;
  constructor(
    
    private route: ActivatedRoute,
    private pokemonService: PokemonService,
    private location: Location) { }

  ngOnInit() {
  
    this.getPokemon()
   
   
  }

  getPokemon(): void {
    

    if(this.route.snapshot.url[0].path === "pokemondetail"){
      console.log("route");
      this.id = +this.route.snapshot.paramMap.get('id');
    }
    
    else if (this.pokemon) {
      console.log("component");
      this.id = this.pokemon.id;
    }
    if(this.id){
      this.pokemonService.getPokemon(this.id)
      .subscribe(p => {
        this.pokemon = p
        this.pokemon.sprite = `${this.spriteUrl}/${this.id}.png`
      });

    }
    


  }

  goBack(): void {
    this.location.back();
  }
}
