import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  events = ['sziget', 'efott', 'fezen', 'szin'];
  show = true;
  inputContent: string;

  toggle() {
    this.show = !this.show;
    this.inputContent = 'alma körte barack';
  }

  demo(ev: Event) {
    console.log(ev);
  }
}
