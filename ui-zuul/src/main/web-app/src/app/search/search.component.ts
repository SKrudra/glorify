import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ProfileService } from './../services/profile.service';
import { Profile } from './../models/profile';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, tap, filter } from 'rxjs/operators';
import { SearchService } from './../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(
    private profileService: ProfileService,
    private searchService: SearchService,
  ) { }
    
  searchName = new FormControl();
  profiles: Observable<Profile[]>;

  ngOnInit() {
      this.profiles = this.searchName.valueChanges
                        .pipe(  debounceTime(400),
                                distinctUntilChanged(),
                                filter((name) => name),
                                switchMap((name) => 
                                    this.profileService.getProfilesFromKeyword(name)
                                ));
  }
    
  search(profile: Profile): void {
      this.searchService.changeSearched(profile.id);
  }

}
