import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { University } from '../model/university';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {


  private  url=String("http://localhost:8080/api/v1/university")

  constructor(private http:HttpClient) { }

  add(body:University){
    return this.http.post(this.url,body)
  }

  getAll():Observable<University>{
    return this.http.get<University>(this.url);
  }}
