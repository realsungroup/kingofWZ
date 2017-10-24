import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseGoodsComponent } from './base-goods.component';

describe('BaseGoodsComponent', () => {
  let component: BaseGoodsComponent;
  let fixture: ComponentFixture<BaseGoodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseGoodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseGoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
