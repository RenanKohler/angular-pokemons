import { Component, OnInit } from '@angular/core';
import { Trainer } from '../Trainer';
import { Router } from '@angular/router';
import { TrainerService } from '../trainer.service';

@Component({
  selector: 'app-new-trainer',
  templateUrl: './new-trainer.component.html',
  styleUrls: ['./new-trainer.component.css']
})
export class NewTrainerComponent implements OnInit {

  trainer:Trainer ={
    nome:' ',
    id:null,
    pokemons:null

  };
  constructor(
    private router: Router,
    
    private trainerService: TrainerService,
  
  ) { }

  ngOnInit() {
  }
  save():void{
    console.log(this.trainer.nome)
    this.trainerService.postTrainer(this.trainer).subscribe(data=> this.router.navigate([`/trainers`]))
  }

}
