import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { data } from 'jquery';
import { ClassService } from 'src/app/class.service';
import { StudentsService } from 'src/app/students.service';



@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
  makeMatriecule(date:Date):string{

    var year=date.getUTCFullYear();
    var mounth=date.getUTCMonth()+1;
    var day=date.getUTCDate();
    var hours=date.getUTCHours();
    var minutes=date.getUTCMinutes();
    var seconds=date.getUTCSeconds();
    return "Et-"+day+""+mounth+""+year+""+hours+""+minutes+""+seconds; 
  }
  current = new Date();

  constructor(private student: StudentsService, private classService: ClassService){}
  
  
  message: boolean = false;
  classId : any
  studentForm = new FormGroup({
    'matricule': new FormControl(this.makeMatriecule(this.current)),
    'nom': new FormControl(""),
    'prenom': new FormControl(""),
    'classId': new FormControl("")
  })

  classes:any=[];
  classStudents : any= []
  clsToUpdate : any;

  ngOnInit():void{
    this.classService.getAllClass().subscribe((datas)=>{
      this.classes = datas;
      console.log(this.classes);
    })
  }
  saveStudent(){
    this.student.postStudent(this.studentForm.value).subscribe((result)=>{

          console.log(result);

              this.classId = this.studentForm.value.classId;

                  this.classService.getClassById(this.classId).subscribe((data)=>{
                    this.clsToUpdate = data;
                    console.log("L'effectif avant : " + this.clsToUpdate.effectif)
                    this.clsToUpdate.effectif += 1;
                    console.log("L'effectif avant : " + this.clsToUpdate.effectif)
                    this.classService.updateClass(this.classId, this.clsToUpdate).subscribe((res)=>{

              })
          });

      this.message = true;
      this.current = new Date();
      this.studentForm= new FormGroup({
        'matricule': new FormControl(this.makeMatriecule(this.current)),
        'nom': new FormControl(""),
        'prenom': new FormControl(""),
        'classId': new FormControl("")
      })
      
    });
  }

  closeMessage(){
    this.message= false;
  }

}
