import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { ListStudentComponent } from './components/list-student/list-student.component';
import { ClassComponent } from './components/class/class.component';
import { ClsDetailsComponent } from './components/cls-details/cls-details.component';


const routes: Routes = [
  
  {
    path: "",
    component: ListStudentComponent 
  },
  {
    path: "add",
    component: AddStudentComponent 
  },
  {
    path: "edit/:id",
    component: EditStudentComponent 
  },
  {
    path: "list",
    component: ListStudentComponent 
  },
  {
    path: "class",
    component: ClassComponent 
  },
  {
    path: "class/:id",
    component: ClsDetailsComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
