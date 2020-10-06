import {Bus} from './bus';

export class Event {
  time: string;
  action: string;
  bus: Bus;

  constructor(time: string, action: string, bus: Bus) {
    this.time = time;
    this.action = action;
    this.bus = bus;
  }

  message() {
  }

  execute() {
  }
}
