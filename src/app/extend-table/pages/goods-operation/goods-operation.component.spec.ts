import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsOperationComponent } from './goods-operation.component';

describe('GoodsOperationComponent', () => {
  let component: GoodsOperationComponent;
  let fixture: ComponentFixture<GoodsOperationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodsOperationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodsOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
