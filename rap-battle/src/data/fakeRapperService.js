import { v4 } from 'uuid';

const masterRapperList= [
  {
    id: v4(),
    name: 'Marlon Craft',
    attack: 20,
    defense: 5,
    hp: 100,
  },
  {
    id: v4(),
    name: 'Andre 3000',
    attack: 40,
    defense: 15,
    hp: 100,
  },
  {
    id: v4(),
    name: 'J. Cole',
    attack: 55,
    defense: 45,
    hp: 100,
  },
  {
    id: v4(),
    name: 'Nas',
    attack: 60,
    defense: 45,
    hp: 100,
  },
  {
    id: v4(),
    name: 'Eminem',
    attack: 75,
    defense: 75,
    hp: 100,
  }
];

export function FakeRapperList(){
    return masterKegList;
}