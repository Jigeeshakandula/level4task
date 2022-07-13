import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  range = new FormGroup({
    start: new FormControl(null),
    end: new FormControl(null),
  });
}
