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
  styleUrls: ['./profile.component.css']
  
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
  epStartDate = new Date("06/30/2018");
  epEndDate = new Date("09/04/2020");
  responsibility="Technical Support Engineer";
  personDetails = {};
  educationDetails = {};
  employmentDetails = {};
  constructor(private route: Router,
    private userData: UserdataService) { }

  ngOnInit(): void {
    this.personDetails = this.userData.getDetails();
    this.fname = this.personDetails['fname'];
    this.lname = this.personDetails['lname'];
    this.age = this.personDetails['age'];

    this.educationDetails = this.userData.getEducationDetails();
    this.university = this.educationDetails['University'];
    this.degree = this.educationDetails['Degree'];
    this.specialization = this.educationDetails['Specialization'];
    this.cgpa = this.educationDetails['cgpa'];
    this.edStartDate = this.educationDetails['edStartDate'];
    // this.EdStartDate = this.datepipe.transform(this.edStartDate, 'yyyy-MM-dd');
    this.edEndDate = this.educationDetails['edEndDate'];
    // this.EdEndDate =this.datepipe.transform(this.edEndDate, 'yyyy-MM-dd');
    
    this.employmentDetails = this.userData.getEmploymentDetails();
    this.organization = this.employmentDetails['Organization'];
    this.designation = this.employmentDetails['Designation'];
    this.experience = this.employmentDetails['Experience'];
    // this.experience = this.years[this.experience].viewVlaue;
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
