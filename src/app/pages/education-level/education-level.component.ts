import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Education } from 'src/app/model/education';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-education-level',
  templateUrl: './education-level.component.html',
  styleUrls: ['./education-level.component.css']
})
export class EducationLevelComponent implements OnInit{


  displayedColumns: string[] = ['id', 'name','action'];
  dataSource :any
  yearList:Education[]=[]

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  eduForm!:FormGroup;

  ngOnInit(): void {
    this.formControl();

    this.getAll()
  }
  getAll() {
    this.ed.getAll().subscribe((response:any)=>{
      console.log("Values are",response)
      this.yearList=response;

      this.dataSource=new MatTableDataSource<Education>(this.yearList)
      this.dataSource.paginator=this.paginator
      this.dataSource.sort=this.sort
    })
  }

    formControl() {
      this.eduForm=new FormGroup({
        educationName :new FormControl(null,[Validators.required])
      })
    }

    onSave(){
      const values=this.eduForm.value;
      this.ed.add(values).subscribe(()=>{
        this.getAll()
        this.eduForm.reset()

      // console.log("succedd")

    })


    }

  constructor(private ed:EducationService,route:Router){}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }



}
