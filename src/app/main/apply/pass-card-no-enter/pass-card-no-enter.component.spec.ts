import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassCardNoEnterComponent } from './pass-card-no-enter.component';

describe('PassCardNoEnterComponent', () => {
  let component: PassCardNoEnterComponent;
  let fixture: ComponentFixture<PassCardNoEnterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassCardNoEnterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassCardNoEnterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
