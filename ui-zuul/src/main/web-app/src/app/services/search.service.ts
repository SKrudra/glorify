import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
    
  searchedUserId: number;  
  searched: Subject<number> = new Subject<number>();
  
  constructor() {
    this.searchedUserId = -1;  //Not searched yet
    this.searched.subscribe( userId => {
        this.searchedUserId = userId;
        console.log(userId);    
    } );    
  }  
  
  changeSearched(userId: number): void {
      this.searched.next(userId);    
  }
    
  resetSearched(): void {
    this.searchedUserId = -1;    
  }
    
}
