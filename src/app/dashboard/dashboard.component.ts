import { Component, OnInit } from '@angular/core';
import { Trainer } from '../Trainer';
import { TrainerService } from '../trainer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  trainers: Trainer[] = [];

  constructor(private trainerService: TrainerService) { }

  ngOnInit() {
    this.getTrainers();
  }

  getTrainers(): void {
    this.trainerService.getTrainers()
      .subscribe(trainers => this.trainers = trainers.filter(t=> t.pokemons.length>1));
  }
}