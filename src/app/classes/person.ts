import {Entity} from './entity';


export class Person extends Entity<Person> {
  line: number;
  from: number;
  to: number;

  constructor(line: number, from: number, to: number) {
    super();
    this.line = line;
    this.from = from;
    this.to = to;
  }
}
