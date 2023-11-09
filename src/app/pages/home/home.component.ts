import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  femaleCount!: number;
  maleCount!: number;


  ngOnInit(): void {

    this.getMaleCount();

    this.getFemaleCount();

  }
  getFemaleCount() {

    this.ss.getFemaleStudentsCount().subscribe((response)=>{
     this.femaleCount=response;
    })
  }
  getMaleCount() {
    this.ss.getMaleStudentsCount().subscribe((response)=>{
      this.maleCount=response;
    })

  }

  constructor(private ss:StudentService){}

}
