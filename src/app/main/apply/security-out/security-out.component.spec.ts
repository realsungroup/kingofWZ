import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityOutComponent } from './security-out.component';

describe('SecurityOutComponent', () => {
  let component: SecurityOutComponent;
  let fixture: ComponentFixture<SecurityOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurityOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
