import { Trainer } from './Trainer';
import { Pokemon } from './Pokemon';

export const TRAINNERS: Trainer[] = [
  {
    id: 1, nome: 'Mr. Nice', pokemons:
      [{ id: 1, name: "Pichaku", base_experience :12,sprite:null}, { id: 2, name: "Burbassauro", base_experience :12,sprite:null}, { id: 3, name: "Tartaruga",base_experience :12,sprite:null }]
  },
  { id: 2, nome: 'Narco', pokemons: [] },
  { id: 3, nome: 'Bombasto', pokemons: [] },
  { id: 4, nome: 'Celeritas', pokemons: [] },
  { id: 5, nome: 'Magneta', pokemons: [] },
  { id: 6, nome: 'RubberMan', pokemons: [] },
  { id: 7, nome: 'Dynama', pokemons: [] },
  { id: 8, nome: 'Dr IQ', pokemons: [] },
  { id: 9, nome: 'Magma', pokemons: [] },
  { id: 10, nome: 'Tornado', pokemons: [] }
];