import { Component, OnInit } from '@angular/core';
import { BaseHttpService } from '../../../base-http-service/base-http.service';

@Component({
  selector: 'app-security-enter',
  templateUrl: './security-enter.component.html',
  styleUrls: ['./security-enter.component.scss']
})
export class SecurityEnterComponent implements OnInit {

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
      resid: 561753056393,
      pageIndex: 0,
      pageSize: 10,
      getcolumninfo: 1
    }
    this.subResid = '562179293341';
    this.requestDataType = this.httpSev.dataT.HostTableDataEM;
  }

}
