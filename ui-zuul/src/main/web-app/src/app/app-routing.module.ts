import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommentsComponent } from './comments/comments.component';
import { SearchComponent } from './search/search.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [  
    {path: 'login', component:LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path : 'dashboard', component: DashboardComponent,
      children: [
        {path: 'comments', component: CommentsComponent},
        {path: 'search', component: SearchComponent}
      ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
