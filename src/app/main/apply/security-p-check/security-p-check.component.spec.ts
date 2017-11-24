import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityPCheckComponent } from './security-p-check.component';

describe('SecurityPCheckComponent', () => {
  let component: SecurityPCheckComponent;
  let fixture: ComponentFixture<SecurityPCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurityPCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityPCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
