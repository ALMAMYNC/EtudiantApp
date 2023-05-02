import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http: HttpClient) { }
  url ="http://localhost:3000/student?_sort=nom&_order=asc"
  urlEmbed ="http://localhost:3000/class?_embed=student";
  urlExpand ="http://localhost:3000/student?_sort=nom&_order=asc?_expand=class";

  // getAllStudent(){
  //   return this.http.get(this.url);
  // };

  getStdWithClass(){
    return this.http.get(this.url)
  }

  postStudent(data: any){
    return this.http.post(this.url, data);
  }

  deleteStudent(id: any){
    return this.http.delete(`${this.url}/${id}`)
  }

  getStudentById(id: any){
    return this.http.get(`${this.url}/${id}`)
  }

  updateStudent(id: number, data: any){
    return this.http.put(`${this.url}/${id}`, data)

  }

  
}
