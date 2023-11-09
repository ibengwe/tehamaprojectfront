import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Course } from 'src/app/model/course';
import { Student } from 'src/app/model/student';
import { CourseService } from 'src/app/services/course.service';
import { StudentService } from 'src/app/services/student.service';





@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})

export class StudentlistComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name','mname','lname','gender','action'];
  dataSource :any
  studentList:Student[]=[]

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  courseForm!:FormGroup;

  ngOnInit(): void {

    this.getAll()
  }
  getAll() {
    this.ss.getAll().subscribe((response:any)=>{
      console.log(response)
      this.studentList=response;

      this.dataSource=new MatTableDataSource<Student>(this.studentList)
      this.dataSource.paginator=this.paginator
      this.dataSource.sort=this.sort
    })
  }

  constructor(private ss:StudentService,private route:Router){}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onView(element:any){
    return this.route.navigateByUrl('studentinfo/'+element.studentId)


  }

}
