import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BaseGoodsComponent } from '../base-goods/base-goods.component';
import { SECURITY_ENTER_DATAMAP } from '../providers/data-map.service';

@Component({
  selector: 'goods-detail-securityEnter',
  templateUrl: '../base-goods/base-goods-securityEnter.component.html'
})
export class GoodsDetailSecurityEnterComponent extends BaseGoodsComponent implements OnInit {

  @Output() closeNoti = new EventEmitter();

  ngOnInit() {
    this._data = SECURITY_ENTER_DATAMAP;
    super.ngOnInit();
    this.detail = true;
  }

  goBack() {
    this.closeNoti.emit();
  }

}
