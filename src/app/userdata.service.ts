import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }
 
  profileDetails ={fname:"Jigeesha", lname:"Kandula", age:"25"};
  educationDetails = {University:"KLUniversity", Degree: "B.Tech", Specialization: "Computer Science", edStartDate: new Date("6/10/2014"), edEndDate: new Date("4/15/2018"), cgpa: "8.0"};
  employmentDetails = {Organization: "Mindtree", Experience:"0-1" , Designation: "Engineer"};
  setPersonalDetails(fName: string, lName: string, Age: string){
 
   this.profileDetails= {fname: fName, lname:lName, age: Age}
   
  }

  setEdDetails(university: string, degree: string, specialization: string, edStartDate: Date, edEndDate: Date, cgpa: string){
    this.educationDetails = {University:university, Degree: degree, Specialization: specialization, edStartDate: edStartDate, edEndDate: edEndDate, cgpa: cgpa}
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
