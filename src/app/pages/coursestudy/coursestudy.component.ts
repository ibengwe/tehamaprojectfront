import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Course } from 'src/app/model/course';
import { CourseService } from 'src/app/services/course.service';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';





@Component({
  selector: 'app-coursestudy',
  templateUrl: './coursestudy.component.html',
  styleUrls: ['./coursestudy.component.css']
})
export class CoursestudyComponent implements OnInit{

  displayedColumns: string[] = ['id', 'name','action'];
  dataSource :any
  courselist:Course[]=[]

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  courseForm!:FormGroup;

  ngOnInit(): void {
    this.formControl();

    this.getAll()
  }
  getAll() {
    this.cs.getAll().subscribe((response:any)=>{
      console.log(response)
      this.courselist=response;

      this.dataSource=new MatTableDataSource<Course>(this.courselist)
      this.dataSource.paginator=this.paginator
      this.dataSource.sort=this.sort
    })
  }

    formControl() {
      this.courseForm=new FormGroup({
        courseName:new FormControl(null,[Validators.required])
      })
    }

    onSave(){
      const values=this.courseForm.value;
      this.cs.add(values).subscribe(()=>{
        this.getAll(); // Refresh the table data
        this.courseForm.reset(); // Clear the form

      // console.log("succedd")

    })


    }

  constructor(private cs:CourseService,route:Router){}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}

