import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityEnterComponent } from './security-enter.component';

describe('SecurityEnterComponent', () => {
  let component: SecurityEnterComponent;
  let fixture: ComponentFixture<SecurityEnterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurityEnterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityEnterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
