import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormModalInputComponent } from './form-modal-input.component';

describe('FormModalInputComponent', () => {
  let component: FormModalInputComponent;
  let fixture: ComponentFixture<FormModalInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormModalInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormModalInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
