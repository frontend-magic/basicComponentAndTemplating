import {Component} from '@angular/core';

export class EventModel {
  id: number;
  name: string;
}

@Component({
  selector: 'app-list-demo',
  templateUrl: './list-demo.component.html',
  styleUrls: ['./list-demo.component.css']
})

export class ListDemoComponent {
  events: EventModel[];

  delete(id: number) {
    this.events = this.events.filter((ev: EventModel) => ev.id !== id);
  }

  constructor() {
    this.events = [
      {
        id: 1,
        name: 'sziget'
      },
      {
        id: 2,
        name: 'fezen'
      },
      {
        id: 3,
        name: 'loveparade'
      }
    ];
    console.log('megjött a list-demo konstruktor');
  }
}


