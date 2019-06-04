import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponceMessageComponent } from './responce-message.component';

describe('ResponceMessageComponent', () => {
  let component: ResponceMessageComponent;
  let fixture: ComponentFixture<ResponceMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponceMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponceMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
