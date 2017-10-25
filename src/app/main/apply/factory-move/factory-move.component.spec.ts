import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactoryMoveComponent } from './factory-move.component';

describe('FactoryMoveComponent', () => {
  let component: FactoryMoveComponent;
  let fixture: ComponentFixture<FactoryMoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactoryMoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactoryMoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
