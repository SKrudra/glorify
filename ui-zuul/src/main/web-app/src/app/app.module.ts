import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModules } from './material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommentsComponent } from './comments/comments.component';
import { SearchComponent } from './search/search.component';
import { BasicLayoutComponent } from './basic-layout/basic-layout.component';
import { RegisterComponent } from './register/register.component';
import { ResponceMessageComponent } from './responce-message/responce-message.component';
import { UserProfile } from './userprofile';
import {UserService} from './services/user/user.service';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule
} from '@angular/material';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { UserSearchComponent } from './user-search/user-search.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { WritecommentComponent } from './writecomment/writecomment.component';
import { AuthGuard } from './auth-guards/auth.guard';


@NgModule({
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatAutocompleteModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CommentsComponent,
    SearchComponent,
    BasicLayoutComponent,
    RegisterComponent,
    ResponceMessageComponent,
    UserSearchComponent,
    EditprofileComponent,
    WritecommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModules,
    NoopAnimationsModule,
    FormsModule, 
    ReactiveFormsModule,
    MatAutocompleteModule,
    HttpClientModule
  ],
  providers: [UserService,UserProfile, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
