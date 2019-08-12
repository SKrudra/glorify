import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WritecommentComponent } from './writecomment.component';

describe('WritecommentComponent', () => {
  let component: WritecommentComponent;
  let fixture: ComponentFixture<WritecommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WritecommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WritecommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
