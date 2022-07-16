import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserdataService } from '../userdata.service';



interface year {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  
})
export class ProfileComponent implements OnInit {
  fname = "J";
  lname = "K";
  age = "0";
  edStartDate: Date;
  edEndDate: Date;
  degree = "";
  university = "";
  specialization="";
  cgpa = "";
  organization="";
  designation="";
  experience="";
  constructor(private route: Router,
    private userData: UserdataService) { }

  ngOnInit(): void {

  }

  
  saveDetails() {
 
    this.route.navigate(['/home']);
    this.userData.setPersonalDetails(this.fname, this.lname, this.age);
    this.userData.setEdDetails(this.university, this.degree, this.specialization, this.edStartDate, this.edEndDate, this.cgpa);
    this.experience = this.years[parseInt(this.experience)].viewValue;
    
    this.userData.setEpDetails(this.organization, this.experience, this.designation);
    
  }


  range = new FormGroup({
    start: new FormControl(null),
    end: new FormControl(null),
  });

  rangel = new FormGroup({
    start: new FormControl(null),
    end: new FormControl(null),
  });

  years: year[] = [
    { value: '0', viewValue: '0-1' },
    { value: '1', viewValue: '2-3' },
    { value: '2', viewValue: '4-6' },
  ];
}
