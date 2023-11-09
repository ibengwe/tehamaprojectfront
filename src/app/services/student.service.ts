import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../model/student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private  url=String("http://localhost:8080/api/v1/student")

  constructor(private http:HttpClient) { }

  add(body:Student){
    return this.http.post(this.url,body)
  }

  getAll():Observable<Student>{
    return this.http.get<Student>(this.url);
  }

  getMaleStudentsCount(): Observable<number> {
    return this.http.get<number>(this.url + '/count/male');
  }

  getFemaleStudentsCount(): Observable<number> {
    return this.http.get<number>(this.url + '/count/female');
  }

  getOne(studentId:String){
    const urls=`${this.url}/${studentId}`
    return this.http.get(urls);
  }

  // getById(force_number:String){
  //   const url=`${this.apiUrl}/${force_number}`
  //   return this.http.get(url)

}
