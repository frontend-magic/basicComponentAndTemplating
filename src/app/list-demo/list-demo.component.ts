import {Component} from '@angular/core';
import {EventModel} from '../event/eventmodel';

@Component({
  selector: 'app-list-demo',
  templateUrl: './list-demo.component.html',
  styleUrls: ['./list-demo.component.css']
})

export class ListDemoComponent {
  events: EventModel[];
  modifyEvent: EventModel;

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
    this.modifyEvent = new EventModel('');
  }

  save(newEventInput: HTMLInputElement, newEventPic: HTMLInputElement) {
    // itt megtudjuk, hogy új elemet akarunk létrehozni id=0
    if (this.modifyEvent.id === 0) {
      const maxId = this.events.reduce((x, y) => x.id > y.id ? x : y).id;
      this.events = [...this.events, new EventModel(newEventInput.value, maxId + 1, newEventPic.value)];
    } else {
      // itt tudjuk, hogy edit szakasz van, azaz meg kell keresni a megfelelo elemet az id alapjan
      this.events = this.events.map((ev) => {
        if (ev.id === this.modifyEvent.id) {
          // itt tudjuk, hogy ezt az elemet kell szerkeszteni
          return {
            id: ev.id,
            name: newEventInput.value,
            pic: newEventPic.value
          };
        } else {
          // itt tudjuk, hogy nem akarunk modositani
          return ev;
        }
      });

      // takaritsunk fel magunk utan
      this.modifyEvent = new EventModel('');
    }

    newEventInput.value = '';
    newEventPic.value = '';
  }

  edit(id: number) {
    this.modifyEvent = this.events.filter((ev) => ev.id === id) [0];
  }

  delete(id: number) {
    this.events = this.events.filter((ev: EventModel) => ev.id !== id);
  }
}


