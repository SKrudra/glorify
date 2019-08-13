import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
    
  searchedUserId: number;  
  searched: Subject<number> = new Subject<number>();
  
  constructor(
    private authService: AuthService,
  ) {
    this.searchedUserId = this.authService.getLoggedInUserId();  //Not searched yet
    this.searched.subscribe( userId => {
        this.searchedUserId = userId;
        console.log(userId);    
    } );    
  }  
  
  changeSearched(userId: number): void {
      this.searched.next(userId);    
  }
    
  resetSearched(): void {
    this.searched.next(this.authService.getLoggedInUserId());
  }
    
}
