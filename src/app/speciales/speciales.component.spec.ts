import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialesComponent } from './speciales.component';

describe('SpecialesComponent', () => {
  let component: SpecialesComponent;
  let fixture: ComponentFixture<SpecialesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
