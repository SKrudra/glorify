import { Component, OnInit } from '@angular/core';
import { UserProfile } from '../userprofile';
import {UserService} from './../services/user.service';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public userProfiles: UserProfile[];
  stateCtrl = new FormControl();
  filteredStates: Observable<UserProfile[]>;
  constructor(private userService: UserService) { 

    this.filteredStates = this.stateCtrl.valueChanges
        .pipe(
          startWith(''),
          map(state => state ? this._filterStates(state) : this.userProfiles.slice())
        );
  }

  ngOnInit() {

    this.userService.getAllUser().subscribe(
        data =>
        {
          this.userProfiles = data;
        }
        );
  }
    
    private _filterStates(value: string): UserProfile[] {
      const filterValue = value.toLowerCase();
  
      return this.userProfiles.filter(state => state.fname.toLowerCase().indexOf(filterValue) === 0);
    }

}
