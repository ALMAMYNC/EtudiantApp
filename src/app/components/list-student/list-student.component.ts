import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/students.service';
import { ClassService } from 'src/app/class.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent {

  constructor(private student: StudentsService, private classService: ClassService){}

  students : any = []
  studentsCls : any = []; 
  dtOptions: DataTables.Settings= {};
  dtTrigger:Subject<any>= new Subject<any>
  ngOnInit():void{
    
      this.dtOptions ={
        language: {
          processing:     "Traitement en cours...",
          search:         "Rechercher&nbsp;:",
          lengthMenu:    "Afficher _MENU_ &eacute;l&eacute;ments",
          info:           "Affichage de l'&eacute;lement _START_ &agrave; _END_ sur _TOTAL_ &eacute;l&eacute;ments",
          infoEmpty:      "Affichage de l'&eacute;lement 0 &agrave; 0 sur 0 &eacute;l&eacute;ments",
          infoFiltered:   "(filtr&eacute; de _MAX_ &eacute;l&eacute;ments au total)",
          infoPostFix:    "",
          loadingRecords: "Chargement en cours...",
          zeroRecords:    "Aucun &eacute;l&eacute;ment &agrave; afficher",
          emptyTable:     "Aucune donnée disponible dans le tableau",
          paginate: {
              first:      "Premier",
              previous:   "Pr&eacute;c&eacute;dent",
              next:       "Suivant",
              last:       "Dernier"
          },
          aria: {
              sortAscending:  ": activer pour trier la colonne par ordre croissant",
              sortDescending: ": activer pour trier la colonne par ordre décroissant"
          }
      },
        pagingType: 'full_numbers',
        pageLength: 5,
        processing: true,
        lengthMenu: [5, 10, 15, 50]

      }

    this.student.getStdWithClass().subscribe((studentDatas)=>{
    
      this.students = studentDatas;
      this.dtTrigger.next(null);
    
    });
    
   

  }

  classes:any=[];
  clsToUpdate : any;
  classId: any;

  deleteStudent(id: any, clsId: any){
  
          console.log("L'Id de la classe est " + clsId);
          this.classService.getClassById(clsId).subscribe((data)=>{

          this.clsToUpdate = data;
          console.log("L'effectif avant : " + this.clsToUpdate.effectif)
          this.clsToUpdate.effectif -= 1;
          console.log("L'effectif apres : "+ this.clsToUpdate.effectif)
          this.classService.updateClass(clsId, this.clsToUpdate).subscribe((res)=>{
          console.log(res);
      })
  });

  this.ngOnInit()

  }
}
