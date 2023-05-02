import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  constructor(private http: HttpClient) { }
  
  url: string = "http://localhost:3000/class" ;
  urlEmbed: string = "http://localhost:3000/class?_embed=student" ;

  getAllClass(){
    return this.http.get(this.urlEmbed);
  }
  getClassStudent(classId: any){
    return this.http.get(`${this.url}/${classId}/student`);
  }

  getClsStd(classId: any){
    return this.http.get(`${this.url}/${classId}?_embeb=student`)
  }
  getClassById(classId:any){
    return this.http.get(`${this.url}/${classId}`)
  }

  updateClass(classId: any, data: any){
    return this.http.put(`${this.url}/${classId}`, data);
  }
}
