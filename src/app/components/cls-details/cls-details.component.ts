import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClassService } from 'src/app/class.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-cls-details',
  templateUrl: './cls-details.component.html',
  styleUrls: ['./cls-details.component.css']
})
export class ClsDetailsComponent {

  constructor(private cls : ClassService, private router: ActivatedRoute){};
  students: any = [];
  
  classStd : any; 
  dtOptions: DataTables.Settings= {};
  dtTrigger:Subject<any>= new Subject<any>
  ngOnInit():void{

    this.cls.getClsStd(this.router.snapshot.params['id']).subscribe((clsDatas)=>{
      this.classStd = clsDatas;
      console.log(clsDatas)
      
    })

    this.cls.getClassStudent(this.router.snapshot.params['id']).subscribe((clsDatas)=>{
      this.students = clsDatas;
      this.dtTrigger.next(null)
    })

  }

}
