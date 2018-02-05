import {Component} from '@angular/core';
import {EventModel} from '../event/eventmodel';

@Component({
  selector: 'app-list-demo',
  templateUrl: './list-demo.component.html',
  styleUrls: ['./list-demo.component.css']
})

export class ListDemoComponent {
  events: EventModel[];

  add(newEventInput: HTMLInputElement, newEventPic: HTMLInputElement) {
    const maxId = this.events.reduce((x, y) => x.id > y.id ? x : y).id;
    this.events = [...this.events, new EventModel(maxId + 1, newEventInput.value, newEventPic.value)];
    newEventInput.value = '';
  }

  delete(id: number) {
    this.events = this.events.filter((ev: EventModel) => ev.id !== id);
  }

  constructor() {
    this.events = [
      {
        id: 1,
        name: 'sziget',
        pic: 'http://m.blog.hu/bu/businessandcafe/image/partners/partners_02/sziget-logo.png'
      },
      {
        id: 2,
        name: 'fezen',
        pic: 'http://hammerworld.hu/images/upload/FEZ17WHITE.jpg'
      },
      {
        id: 3,
        name: 'loveparade',
        pic: 'http://www.fazemag.de/wp-content/uploads/2016/05/l13426-loveparade-logo-12605.png'
      }
    ];
    console.log('megjött a list-demo konstruktor');
  }
}


