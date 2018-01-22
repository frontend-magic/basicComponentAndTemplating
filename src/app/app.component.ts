import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Netacademia a tuti';
  events = ['sziget', 'efott', 'fezen', 'szin'];
  show = true;
  inputContent: string;

  egyenek =
    [
      {
        'id': 1,
        'name': 'Tamás'
      },
      {
        'id': 2,
        'name': 'Géza'
      }

      ,
      {
        'id': 3,
        'name'
          :
          'Jónás'
      }
    ];

  toggle() {
    this.show = !this.show;
    this.inputContent = 'alma körte barack';
  }

  demo(ev: Event) {
    console.log(ev);
  }
}
