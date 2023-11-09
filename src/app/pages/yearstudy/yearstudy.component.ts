import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Course } from 'src/app/model/course';
import { Yearstudy } from 'src/app/model/yearstudy';
import { CourseService } from 'src/app/services/course.service';
import { YearstudyService } from 'src/app/services/yearstudy.service';

@Component({
  selector: 'app-yearstudy',
  templateUrl: './yearstudy.component.html',
  styleUrls: ['./yearstudy.component.css']
})
export class YearstudyComponent implements OnInit{

  displayedColumns: string[] = ['id', 'name','action'];
  dataSource :any
  yearList:Yearstudy[]=[]

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  yearForm!:FormGroup;

  ngOnInit(): void {
    this.formControl();

    this.getAll()
  }
  getAll() {
    this.ys.getAll().subscribe((response:any)=>{
      console.log("Values are",response)
      this.yearList=response;

      this.dataSource=new MatTableDataSource<Yearstudy>(this.yearList)
      this.dataSource.paginator=this.paginator
      this.dataSource.sort=this.sort
    })
  }

    formControl() {
      this.yearForm=new FormGroup({
        year:new FormControl(null,[Validators.required])
      })
    }

    onSave(){
      const values=this.yearForm.value;
      this.ys.add(values).subscribe(()=>{
      this.getAll()
      this.yearForm.reset()

      // console.log("succedd")

    })


    }

  constructor(private ys:YearstudyService,route:Router){}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


}
