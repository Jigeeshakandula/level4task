import { Component, OnInit } from '@angular/core';
interface year {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  years: year[] = [
    {value: '0', viewValue: '0-1'},
    {value: '1', viewValue: '2-3'},
    {value: '2', viewValue: '4-6'},
  ];

}
