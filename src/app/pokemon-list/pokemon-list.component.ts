import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { ActivatedRoute, Router } from '@angular/router';
import {Pokemon} from '../Pokemon';
import { Location } from '@angular/common';


@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  // @ViewChild('pokemonDetail') idDetail: ElementRef;
  private flagBattle:boolean ;
  private idPokemon:number;
  private page:string = "https://pokeapi.co/api/v2/pokemon";
  private next:string;
  private previous:string;
  private pokemonList: Pokemon[]=[];
  private spriteUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private pokemonService: PokemonService,
    private location: Location) { }

  // @Input() title:string;
  ngOnInit() {
    this.flagBattle = false;
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
  battle():void{
    this.flagBattle= true;
    // this.idDetail.nativeElement.disabled=true;
    alert("select  pokemon to battle");
    
        

     
    


  }
  onSelect(pokemon:Pokemon):void{
    console.log(pokemon.id)
    if(this.flagBattle){

      this.idPokemon = pokemon.id;
      this.router.navigate([`/battle/${this.idPokemon}`])

    }

  }

}
