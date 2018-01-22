import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AlmaComponent } from './alma/alma.component';
import {EventComponent} from './event/event.component';
import {FormsModule} from '@angular/forms';
import { ListDemoComponent } from './list-demo/list-demo.component';


@NgModule({
  declarations: [
    AppComponent,
    AlmaComponent,
    EventComponent,
    ListDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
