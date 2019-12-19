import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../Pokemon';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TrainerService } from '../trainer.service';

@Component({
  selector: 'app-new-pokemon',
  templateUrl: './new-pokemon.component.html',
  styleUrls: ['./new-pokemon.component.css']
})
export class NewPokemonComponent implements OnInit {
  pokemon:Pokemon;
  private page:string = "https://pokeapi.co/api/v2/pokemon";
  private next:string;
  private previous:string;
  private pokemonList: Pokemon[]=[];
  private spriteUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
 

  
  constructor( 
    private router: Router,
    private route: ActivatedRoute,
    private pokemonService: PokemonService,
    private trainerService: TrainerService,
    private location: Location
    ) { }

  ngOnInit() {
    this.getPokemons();
  }
  getPokemons():void{
    this.pokemonList =[];
    this.pokemonService.getPokemons(this.page).subscribe(pl=>{
      
      this.next = pl.next;
      console.log(this.next);
      this.previous = pl.previous;
      
      for(let result of pl.results){
        
        this.pokemonService.getPokemonByUrl(result.url).subscribe(x=> {
          x.sprite=`${this.spriteUrl}/${x.id}.png`;
          this.pokemonList.push(x);
          this.pokemonList.sort((a, b) => a.id - b.id);
        });
        
      }     

    })

  }
  onSelect(pokemon:Pokemon):void{
    let id = +this.route.snapshot.paramMap.get('id');
    this.trainerService.putPokemon(id,pokemon).subscribe(data=> this.router.navigate([`/detail/${id}`]));


  }
  nextPage():void{
   
    this.page = this.next;
    this.getPokemons();
    
    
  }
  previousPage(){
    if(this.previous!=null){
      this.page=this.previous;
      this.getPokemons();
    }
    
  }

}
