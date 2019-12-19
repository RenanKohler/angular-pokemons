import { Injectable } from '@angular/core';
import {Trainer} from './Trainer';
import {TRAINNERS} from './mock-trainers';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
      
import { Observable, of } from 'rxjs';
import { Pokemon } from './Pokemon';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

      
  private trainersUrl = 'http://127.0.0.1:8080/treinador';

  getTrainers(): Observable<Trainer[]> {

    return this.http.get<Trainer[]>(this.trainersUrl);
    // TODO: send the message _after_ fetching the trainers
    this.messageService.add('TrainerService: fetched trainers');
    return of(TRAINNERS);
  } 

  postTrainer(trainer:Trainer): Observable<Trainer>{
    return this.http.post<Trainer>(this.trainersUrl,trainer);
  }
  getTrainer(id: number): Observable<Trainer> {
    const url = `${this.trainersUrl}/${id}`;
    return this.http.get<Trainer>(url);
    
  }
  putTrainer(trainer:Trainer,id:number): Observable<Trainer> {
    const url = `${this.trainersUrl}/${id}`;
    return this.http.put<Trainer>(url,trainer);
    
  }
  deleteTrainer(id:number): Observable<Trainer> {
    const url = `${this.trainersUrl}/${id}`;
    return  this.http.delete<Trainer>(url);
  }
  putPokemon(idTrainer:number,pokemon:Pokemon):Observable<Pokemon>{
    const url = `${this.trainersUrl}/${idTrainer}/pokemon`;
    return this.http.post<Pokemon>(url,pokemon);
  }

  // getTrainers(): Trainer[]{
  //   return HEROES
  // } 


  constructor(private messageService: MessageService, private http: HttpClient,) { }
}
