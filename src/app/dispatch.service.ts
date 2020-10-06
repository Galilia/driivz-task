import {Injectable} from '@angular/core';
import {Bus} from './classes/bus';
import {Event} from './classes/event';

@Injectable({
  providedIn: 'root'
})
export class DispatchService {

  eventArray: Event [] = [];

  constructor() {
  }

  dispatch(bus: Bus, action: string) {
    const newEvent = new Event('00:05', action, bus);
    this.eventArray.push(newEvent);
  }
}
