import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }
 
  profileDetails ={};
  educationDetails = {};
  employmentDetails = {};
  setPersonalDetails(fName: string, lName: string, Age: string){
 
   this.profileDetails= {fullName : fName+" "+lName, age: Age}
   
  }

  setEdDetails(university: string, degree: string, specialization: string, edStartDate: Date, edEndDate: Date, cgpa: string){
    this.educationDetails = {University:university, Degree: degree, Specialization: specialization, edStartDate: edStartDate, edEndDate: edEndDate, cgpa}
  }

  setEpDetails(organization: string, experience: string, designation: string){
    this.employmentDetails = {Organization: organization, Experience: experience, Designation: designation}
  }
  getDetails(){
    return this.profileDetails;
  }
  getEducationDetails(){
    return this.educationDetails;
  }
  getEmploymentDetails(){
    return this.employmentDetails;
  }
}
