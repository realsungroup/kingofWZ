import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BaseGoodsComponent } from '../base-goods/base-goods.component';

@Component({
  selector: 'goods-add',
  templateUrl: '../base-goods/base-goods.component.html',
  styleUrls: ['./goods-add.component.scss']
})
export class GoodsAddComponent extends BaseGoodsComponent implements OnInit {

  ngOnInit() {
    super.ngOnInit();
  }

  //返回点击事件
  goBack() {
    this.eventNoti.emit({ name: "close" });
  }

  submitClick(){
    super.submitClick(this.httpSev.dataT.AddOneDataEM);
  }
}
