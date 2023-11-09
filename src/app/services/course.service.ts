import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private  url=String("http://localhost:8080/api/v1/course")

  constructor(private http:HttpClient) { }

  add(body:Course){
    return this.http.post(this.url,body)
  }

  getAll():Observable<Course>{
    return this.http.get<Course>(this.url);
  }
}
