import { Component, OnInit } from '@angular/core';
import { BaseGoodsComponent } from '../base-goods/base-goods.component';

@Component({
  selector: 'goods-operation',
  templateUrl: '../base-goods/base-goods.component.html',
  styleUrls: ['./goods-operation.component.scss']
})
export class GoodsOperationComponent extends BaseGoodsComponent implements OnInit {

  ngOnInit() {
    super.ngOnInit();
  }

  //返回点击事件
  goBack() {
    this.eventNoti.emit({ name: "close" });
  }

  submitClick(){
    super.submitClick(this.httpSev.dataT.FixOneDataEM);
  }
}
