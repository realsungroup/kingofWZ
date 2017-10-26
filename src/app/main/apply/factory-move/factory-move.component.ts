import { Component, OnInit } from '@angular/core';
import { BaseHttpService } from '../../../base-http-service/base-http.service';

@Component({
  selector: 'app-factory-move',
  templateUrl: './factory-move.component.html',
  styleUrls: ['./factory-move.component.scss']
})
export class FactoryMoveComponent implements OnInit {

  url: string = '';
  requestParams: any = {};
  requestDataType: number = -1;
  subResid = '';

  constructor(private httpSev: BaseHttpService) {
  }

  ngOnInit() {
    let path = this.httpSev.path;
    this.url = path.baseUrl + path.getData;
    this.requestParams = {
      resid: 561753071073,
      pageIndex: 0,
      pageSize: 10,
      getcolumninfo: 1
    }
    this.subResid = '562179317919';
    this.requestDataType = this.httpSev.dataT.HostTableDataEM;
  }

}
