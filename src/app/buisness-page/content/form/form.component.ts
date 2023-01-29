import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  selectedSimpleItem!: string;

  simpleItems: string[] = [];
  ngOnInit() {
    this.simpleItems = [
      'Sed ut perspiciatis',
      'Nemo enim ipsam',
      'Et harum quidem',
      'Temporibus autem',
      'Itaque earum rerum',
      'Sed ut perspiciatis',
      'Nemo enim ipsam',
      'Et harum quidem',
      'Temporibus autem',
      'Itaque earum rerum',
      'Sed ut perspiciatis',
      'Nemo enim ipsam',
      'Et harum quidem',
      'Temporibus autem',
      'Itaque earum rerum',
      'Sed ut perspiciatis',
      'Nemo enim ipsam',
      'Et harum quidem',
      'Temporibus autem',
      'Sed ut perspiciatis',
      'Nemo enim ipsam',
      'Et harum quidem',
      'Temporibus autem',
      'Itaque earum rerum',
      'Sed ut perspiciatis',
      'Nemo enim ipsam',
      'Et harum quidem',
      'Temporibus autem',
      'Itaque earum rerum',
      'Sed ut perspiciatis',
      'Nemo enim ipsam',
      'Et harum quidem',
      'Temporibus autem',
      'Itaque earum rerum',
      'Sed ut perspiciatis',
      'Nemo enim ipsam',
      'Et harum quidem',
      'Temporibus autem',
      'Itaque earum rerum',
    ];
  }

  disabled = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 0;
  title = 'file-uploader';

}
