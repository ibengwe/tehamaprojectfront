import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Education } from '../model/education';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  private  url=String("http://localhost:8080/api/v1/education")

  constructor(private http:HttpClient) { }

  add(body:Education){
    return this.http.post(this.url,body)
  }

  getAll():Observable<Education>{
    return this.http.get<Education>(this.url);
  }


}
