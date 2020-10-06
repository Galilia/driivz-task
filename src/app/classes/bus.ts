import {Entity} from './entity';
import {Person} from './person';
import {Line} from './line';
import {Stop} from './stop';

export class Bus extends Entity<Bus> {
  maxCapacity: number;
  passengers: Person[];
  currentLine: Line;
  currentStop: Stop;
  currentStopIndex: number;

  constructor(maxCapacity: number,
              passengers: Person[] = [],
              currentLine: Line,
              currentStop: Stop,
              currentStopIndex: number) {
    super();
    this.maxCapacity = maxCapacity;
    this.passengers = passengers;
    this.currentLine = currentLine;
    this.currentStop = currentStop;
    this.currentStopIndex = currentStopIndex;
  }

  reset() {
  }

  changeColor() {
  }

  showPeople() {
  }

  getPassengersGetOn() {
  }

  addPeople() {
  }

  removePeople() {
  }

}
