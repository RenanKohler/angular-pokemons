import { TestBed } from '@angular/core/testing';

import { TrainerService } from './trainer.service';

describe('HeroService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrainerService = TestBed.get(TrainerService);
    expect(service).toBeTruthy();
  });
});
