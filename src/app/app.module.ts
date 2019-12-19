import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { TrainersComponent } from './trainers/trainers.component';
import { FormsModule } from '@angular/forms';
import { TrainerDetailComponent } from './trainer-detail/trainer-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component'; 
import { HttpClientModule }    from '@angular/common/http';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { BattleComponent } from './battle/battle.component';
import { NewPokemonComponent } from './new-pokemon/new-pokemon.component';
import { NewTrainerComponent } from './new-trainer/new-trainer.component';
@NgModule({
  declarations: [
    AppComponent,
    TrainersComponent,
    TrainerDetailComponent,
    MessagesComponent,
    DashboardComponent,
    PokemonDetailComponent,
    PokemonListComponent,
    BattleComponent,
    NewPokemonComponent,
    NewTrainerComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
