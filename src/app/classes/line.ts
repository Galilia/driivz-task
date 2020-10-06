import {Bus} from './bus';
import {Entity} from './entity';
import {Stop} from './stop';


export class Line extends Entity<Line> {
  name: string;
  stops: Stop[];
  buses: Bus[];
  onSim: boolean;
  interval: number;

  constructor(name: string,
              stops: Stop[] = [],
              buses: Bus[] = [],
              onSim: boolean,
              interval: number) {
    super();
    this.name = name;
    this.stops = stops;
    this.buses = buses;
    this.onSim = onSim;
    this.interval = interval;
  }

  reset() {
  }
}
