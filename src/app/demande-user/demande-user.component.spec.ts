import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeUserComponent } from './demande-user.component';

describe('DemandeUserComponent', () => {
  let component: DemandeUserComponent;
  let fixture: ComponentFixture<DemandeUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandeUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
