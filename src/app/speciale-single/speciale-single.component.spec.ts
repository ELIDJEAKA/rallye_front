import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialeSingleComponent } from './speciale-single.component';

describe('SpecialeSingleComponent', () => {
  let component: SpecialeSingleComponent;
  let fixture: ComponentFixture<SpecialeSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialeSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialeSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
