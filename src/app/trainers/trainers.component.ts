import { Component, OnInit } from '@angular/core';

import { Trainer } from '../Trainer';
import { TrainerService } from '../trainer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trainers',
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.css']
})
export class TrainersComponent implements OnInit {
  trainers: Trainer[];

  constructor(private trainerService: TrainerService,private router: Router,) { }

  ngOnInit() {
    this.getTrainers();
  }

  getTrainers(): void {
    this.trainerService.getTrainers()
    .subscribe(trainers => this.trainers = trainers);
  }
  newTrainer():void{
    this.router.navigate(['/newTrainer']);

  }
  
}