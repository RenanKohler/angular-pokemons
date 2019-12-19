import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainersComponent } from './trainers/trainers.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { TrainerDetailComponent }  from './trainer-detail/trainer-detail.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import {PokemonListComponent} from './pokemon-list/pokemon-list.component';
import { BattleComponent } from './battle/battle.component';
import { NewPokemonComponent } from './new-pokemon/new-pokemon.component';
import { NewTrainerComponent } from './new-trainer/new-trainer.component';



const routes: Routes = [
  {path:'trainers',component: TrainersComponent},
  {path:'newTrainer',component: NewTrainerComponent},
  {path:'battle/:id',component: BattleComponent},
  {path:'detail/:id/newPokemon',component: NewPokemonComponent},
  {path:'pokemons',component: PokemonListComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: TrainerDetailComponent },
  { path: 'pokemondetail/:id', component: PokemonDetailComponent },
  { path: 'trainers', component: TrainersComponent }
]; 

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {}