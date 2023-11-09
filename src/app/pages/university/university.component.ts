import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { University } from 'src/app/model/university';
import { UniversityService } from 'src/app/services/university.service';

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.css']
})
export class UniversityComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name','action'];
  dataSource :any
  yearList:University[]=[]

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  uniForm!:FormGroup;

  ngOnInit(): void {
    this.formControl();

    this.getAll()
  }
  getAll() {
    this.us.getAll().subscribe((response:any)=>{
      console.log("Values are",response)
      this.yearList=response;

      this.dataSource=new MatTableDataSource<University>(this.yearList)
      this.dataSource.paginator=this.paginator
      this.dataSource.sort=this.sort
    })
  }

    formControl() {
      this.uniForm=new FormGroup({
        universityName :new FormControl(null,[Validators.required])
      })
    }

    onSave(){
      const values=this.uniForm.value;
      this.us.add(values).subscribe(()=>{
        this.getAll()
        this.uniForm.reset()

      // console.log("succedd")

    })


    }

  constructor(private us:UniversityService,route:Router){}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


}
