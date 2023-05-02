import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { StudentsService } from 'src/app/students.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent {

  constructor(private student: StudentsService, private router: ActivatedRoute){}
  message: boolean = false;

  studentUpdateForm = new FormGroup({
    'matricule': new FormControl("Et-JJAAAMMMIISS"),
    'nom': new FormControl(""),
    'prenom': new FormControl("")
  });

  ngOnInit(): void{

    this.student.getStudentById(this.router.snapshot.params['id']).subscribe((result: any)=>{

      this.studentUpdateForm = new FormGroup({
        'matricule': new FormControl(result['matricule']),
        'nom': new FormControl(result['nom']),
        'prenom': new FormControl(result['prenom'])
      })
    })
  }
  
  updateStudent(){
    this.student.updateStudent(this.router.snapshot.params['id'], this.studentUpdateForm.value).subscribe((result)=>{
      console.log(result);
      this.message = true;
    })
  }

  closeMessage(){
    this.message= false;
  }

  

}
