import { v4 } from 'uuid';

const masterRapperList= [
  {
    id: v4(),
    rapper: 'Marlon Craft',
    attack: 20,
    defense: 5,
    hp: 100,
  },
  {
    id: v4(),
    rapper: 'Andre 3000',
    attack: 40,
    defense: 15,
    hp: 100,
  },
  {
    id: v4(),
    rapper: 'J. Cole',
    attack: 55,
    defense: 45,
    hp: 100,
  },
  {
    id: v4(),
    rapper: 'Nas',
    attack: 60,
    defense: 45,
    hp: 100,
  },
  {
    id: v4(),
    rapper: 'Eminem',
    attack: 75,
    defense: 75,
    hp: 100,
  }
];

export function FakeRapperList(){
    return masterRapperList;
}