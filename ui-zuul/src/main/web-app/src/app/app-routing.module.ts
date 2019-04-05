import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommentsComponent } from './comments/comments.component';

const routes: Routes = [
    {path : 'login', component: LoginComponent},
    {path : 'dashboard', component: DashboardComponent,
    children: [
        {path: 'comments', component: CommentsComponent}
    ]
    }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
