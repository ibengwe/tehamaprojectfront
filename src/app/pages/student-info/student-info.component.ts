import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css']
})
export class StudentInfoComponent implements OnInit {
  studentInfo:any

  constructor(private route:ActivatedRoute,
              private ss:StudentService
    ){}

  ngOnInit(): void {
    this.route.params.subscribe((paramsValue:any)=>{
      console.log("the values are:",paramsValue);
      const studentId=paramsValue.studentId;
      this.fetchStudentById(studentId);

    })

  }
  fetchStudentById(studentId: any) {
    this.ss.getOne(studentId).subscribe((response:any)=>{
      console.log("values are=>",response)
      this.studentInfo=response;

    })
  }

}


