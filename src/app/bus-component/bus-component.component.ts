import {Component, Input, OnInit} from '@angular/core';
import {DispatchService} from '../dispatch.service';
import {Bus} from '../classes/bus';

@Component({
  selector: 'app-bus-component',
  templateUrl: './bus-component.component.html',
  styleUrls: ['./bus-component.component.css']
})
export class BusComponentComponent implements OnInit {
  @Input() appBus: Bus;

  constructor(private dispatchService: DispatchService) {
  }

  ngOnInit(): void {
  }

  addPassengers() {
    this.appBus.addPeople();
    this.dispatchService.dispatch(this.appBus, 'GoToTheNextStop');
  }

}
