import { Component, OnInit } from '@angular/core';
import { ClassService } from 'src/app/class.service';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent {

constructor(private serviceClass: ClassService){}

classes:any = [];
clsStudent : any;

ngOnInit():void{
  this.serviceClass.getAllClass().subscribe((datas)=>{
    console.log(datas);
    this.classes= datas;
  })
}

showDetail(classId : any){
  this.serviceClass.getClassStudent(classId).subscribe((clsDatas)=>{
    this.clsStudent = clsDatas;
  });
};

}
