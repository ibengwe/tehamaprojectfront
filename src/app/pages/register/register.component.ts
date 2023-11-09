import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Course } from 'src/app/model/course';
import { Education } from 'src/app/model/education';
import { University } from 'src/app/model/university';
import { Yearstudy } from 'src/app/model/yearstudy';
import { CourseService } from 'src/app/services/course.service';
import { EducationService } from 'src/app/services/education.service';
import { StudentService } from 'src/app/services/student.service';
import { UniversityService } from 'src/app/services/university.service';
import { YearstudyService } from 'src/app/services/yearstudy.service';

interface Gender {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  studentForm!:FormGroup
  yearList:Yearstudy[]=[]
  universityList:University[]=[]
  eduList:Education[]=[]
  courselist:Course[]=[]

  ngOnInit(): void {
    this.getAll();
    this.getAllEducation()
    this.getAllCourse()
    this.getAllUniversity()
    this.formControl()

  }
  formControl() {
    this.studentForm=new FormGroup({
      studentId:new FormControl(null,[Validators.required]),
      firstName:new FormControl(null,[Validators.required]),
      middleName:new FormControl(null,[Validators.required]),
      lastName:new FormControl(null,[Validators.required]),
      gender:new FormControl(null,[Validators.required]),
      dob:new FormControl(null,[Validators.required]),
      educationLevel:new FormControl(null,[Validators.required]),
      yearStudy:new FormControl(null,[Validators.required]),
      courseStudy:new FormControl(null,[Validators.required]),
      university:new FormControl(null,[Validators.required])
    })
  }

  getAll() {
    this.ys.getAll().subscribe((response:any)=>{
      console.log("Values are",response)
      this.yearList=response;

    })
  }


  getAllEducation() {
    this.ed.getAll().subscribe((response:any)=>{
      console.log("Values are",response)
      this.eduList=response;


    })
  }


  getAllCourse() {
    this.cs.getAll().subscribe((response:any)=>{
      console.log(response)
      this.courselist=response;
    })
  }


  getAllUniversity() {
    this.us.getAll().subscribe((response:any)=>{
      console.log("Values are",response)
      this.universityList=response;


    })
  }

  gender: Gender[] = [
    {value: 'male', viewValue: 'Male'},
    {value: 'female', viewValue: 'Female'}
  ];

  constructor(private ys:YearstudyService,
              private ed:EducationService,
              private cs:CourseService,
              private us:UniversityService,
              private ss:StudentService,
              route:Router

              ){}

onSave(){
  const values=this.studentForm.value;
  this.ss.add(values).subscribe(()=>{
  this.studentForm.reset()

}

)

}

}
