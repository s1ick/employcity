import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  toggle!: boolean;
  checkToggle(e: any) {
 
    this.toggle = e;
    console.log('app-log',this.toggle)
  }
}
