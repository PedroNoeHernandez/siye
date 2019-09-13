import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponentTableComponent } from './form-component-table.component';

describe('FormComponentTableComponent', () => {
  let component: FormComponentTableComponent;
  let fixture: ComponentFixture<FormComponentTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormComponentTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponentTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
