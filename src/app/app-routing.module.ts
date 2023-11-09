import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { StudentlistComponent } from './pages/studentlist/studentlist.component';
import { CoursestudyComponent } from './pages/coursestudy/coursestudy.component';
import { YearstudyComponent } from './pages/yearstudy/yearstudy.component';
import { EducationLevelComponent } from './pages/education-level/education-level.component';
import { UniversityComponent } from './pages/university/university.component';
import { StudentInfoComponent } from './pages/student-info/student-info.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:"",component:MainLayoutComponent,

children:
[
  {path:'home',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'student-list',component:StudentlistComponent},
  {path:'course',component:CoursestudyComponent},
  {path:'year',component:YearstudyComponent},
  {path:'education',component:EducationLevelComponent},
  {path:'university',component:UniversityComponent},
  {path:'studentinfo/:studentId',component:StudentInfoComponent}

  // path:"view-staff/:force_number",


]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
