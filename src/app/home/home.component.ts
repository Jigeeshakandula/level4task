import { DatePipe } from '@angular/common';
import { Component, Injectable, OnInit } from '@angular/core';
import { ProfileComponent } from '../profile/profile.component';
import { UserdataService } from '../userdata.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})

export class HomeComponent implements OnInit{
  fname="";
  age="";
  edStartDate: Date;
  edEndDate: Date;
  EdStartDate ="";
  EdEndDate = "";
  degree = "";
  university = "";
  specialization="";
  cgpa = "";
  personDetails = {};
  educationDetails = {};
  employmentDetails = {};
  organization="";
  designation="";
  experience="";
  constructor(private userData: UserdataService, public datepipe: DatePipe) {}

  ngOnInit(): void {
    this.personDetails = this.userData.getDetails();
    this.fname = this.personDetails['fullName'];
    this.age = this.personDetails['age'];

    this.educationDetails = this.userData.getEducationDetails();
    this.university = this.educationDetails['University'];
    this.degree = this.educationDetails['Degree'];
    this.specialization = this.educationDetails['Specialization'];
    this.cgpa = this.educationDetails['cgpa'];
    this.edStartDate = this.educationDetails['edStartDate'];
    this.EdStartDate = this.datepipe.transform(this.edStartDate, 'yyyy-MM-dd');
    this.edEndDate = this.educationDetails['edEndDate'];
    this.EdEndDate =this.datepipe.transform(this.edEndDate, 'yyyy-MM-dd');
    
    this.employmentDetails = this.userData.getEmploymentDetails();
    this.organization = this.employmentDetails['Organization'];
    this.designation = this.employmentDetails['Designation'];
    this.experience = this.employmentDetails['Experience'];
    
  }

 

}
