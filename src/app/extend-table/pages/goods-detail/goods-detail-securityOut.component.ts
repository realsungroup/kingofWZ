import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BaseGoodsComponent } from '../base-goods/base-goods.component';
import { SECURITY_OUT_DATAMAP } from '../providers/data-map.service';

@Component({
  selector: 'goods-detail-securityOut',
  templateUrl: '../base-goods/base-goods-securityOut.component.html'
})
export class GoodsDetailSecurityOutComponent extends BaseGoodsComponent implements OnInit {

  @Output() closeNoti = new EventEmitter();

  ngOnInit() {
    this._data = SECURITY_OUT_DATAMAP;
    super.ngOnInit();
    this.detail = true;
  }

  goBack() {
    this.closeNoti.emit();
  }

}
