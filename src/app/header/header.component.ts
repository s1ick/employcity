import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  toggle = false;
  @Output() toggleEmiiter = new EventEmitter<boolean>();
  toggleMenu() {
    this.toggle = !this.toggle;   
    console.log('header-log', this.toggle)
    this.toggleEmiiter.emit(this.toggle)
  }
}
