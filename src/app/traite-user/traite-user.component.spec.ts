import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraiteUserComponent } from './traite-user.component';

describe('TraiteUserComponent', () => {
  let component: TraiteUserComponent;
  let fixture: ComponentFixture<TraiteUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraiteUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraiteUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
