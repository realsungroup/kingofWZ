import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BaseGoodsComponent } from '../base-goods/base-goods.component';

@Component({
  selector: 'goods-detail',
  templateUrl: '../base-goods/base-goods.component.html',
  styleUrls: ['./goods-detail.component.scss']
})
export class GoodsDetailComponent extends BaseGoodsComponent implements OnInit {

  @Output() closeNoti = new EventEmitter();

  ngOnInit() {
    super.ngOnInit();
    this.detail = true;
  }

  //返回事件
  close() {
    this.closeNoti.emit();
  }

}
