import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponentAtributeComponent } from './form-component-atribute.component';

describe('FormComponentAtributeComponent', () => {
  let component: FormComponentAtributeComponent;
  let fixture: ComponentFixture<FormComponentAtributeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormComponentAtributeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponentAtributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
