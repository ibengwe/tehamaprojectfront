import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Yearstudy } from '../model/yearstudy';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YearstudyService {

  private  url=String("http://localhost:8080/api/v1/years")

  constructor(private http:HttpClient) { }

  add(body:Yearstudy){
    return this.http.post(this.url,body)
  }

  getAll():Observable<Yearstudy>{
    return this.http.get<Yearstudy>(this.url);
  }

  // getOne(id:number):Observable<Yearstudy>{
  //   const rl=`${this.url}/${year}`
  //   return this.http.get<Yearstudy>(rl)

  // }

}
