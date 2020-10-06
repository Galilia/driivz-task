import {Person} from './person';
import {Entity} from './entity';


export class Stop extends Entity<Stop> {
  name: string;
  location: number;
  passengers: Person[];

  constructor(name: string, location: number, passengers: Person[] = []) {
    super();
    this.name = name;
    this.location = location;
    this.passengers = passengers;
  }

  showPeople() {
  }

}
