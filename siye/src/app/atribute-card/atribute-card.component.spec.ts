import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtributeCardComponent } from './atribute-card.component';

describe('AtributeCardComponent', () => {
  let component: AtributeCardComponent;
  let fixture: ComponentFixture<AtributeCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtributeCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtributeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
