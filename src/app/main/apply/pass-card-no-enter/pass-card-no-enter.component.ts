import { Component, OnInit } from '@angular/core';
import { BaseHttpService } from '../../../base-http-service/base-http.service';

@Component({
  selector: 'app-pass-card-no-enter',
  templateUrl: './pass-card-no-enter.component.html',
  styleUrls: ['./pass-card-no-enter.component.scss']
})
export class PassCardNoEnterComponent implements OnInit {

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
      resid: 561753038288,
      pageIndex: 0,
      pageSize: 10,
      getcolumninfo: 1
    }
    this.subResid = '562075064438';
    this.requestDataType = this.httpSev.dataT.HostTableDataEM;
  }

}
