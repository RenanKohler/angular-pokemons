import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { Trainer }         from '../Trainer';
import { TrainerService }  from '../trainer.service';
import { Pokemon } from '../Pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-trainer-detail',
  templateUrl: './trainer-detail.component.html',
  styleUrls: [ './trainer-detail.component.css' ]
})
export class TrainerDetailComponent implements OnInit {
  trainer: Trainer;
  pokemon:Pokemon;
  private spriteUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private trainerService: TrainerService,
    private pokemonService: PokemonService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getTrainer();
  }

  getTrainer(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.trainerService.getTrainer(id)
      .subscribe(trainer => {
        this.trainer = trainer;
        this.trainer.pokemons.forEach(p=> {
          p.sprite = `${this.spriteUrl}/${p.id}.png`;
          this.pokemonService.getPokemon(p.id).subscribe(pkm => p.base_experience = pkm .base_experience);
       
        } );

      });
  }

  goBack(): void {
    this.location.back();
  }
  onSelect(pokemon: Pokemon): void {
 
    this.pokemon = pokemon;
  }
  save():void{

    const id = +this.route.snapshot.paramMap.get('id');
    this.trainerService.putTrainer(this.trainer, id).subscribe(data => {
      this.router.navigate(['/trainers'])

    });
  }
  deleteTrainer():void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.trainerService.deleteTrainer(id).subscribe(data=>
      this.router.navigate(['/trainers'])
      );
 

  }
  addPokemon():void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.router.navigate([`detail/${id}/newPokemon`]);
  }

}