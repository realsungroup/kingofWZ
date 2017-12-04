import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { BaseHttpService } from '../../../base-http-service/base-http.service';
import { AppService } from '../../../app.service';
import { Router } from '@angular/router';
import { MainService } from '../../main.service';
import { LZcommonTableComponent } from '../../../../../src/lib/lzTableComponent/commonTable/lzcommon-table.component'
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss'],


})
export class SecurityComponent implements OnInit, AfterViewInit {
  url: string = ''
  requestParams = {}
  requestDataType = -1;
  childurl=""
  tabs = [];
  tabsA= [];
  tabsB= [];
  requestErrorParams={};
  childrequestParams={};
  alertModal: boolean = true;
  operationButton = [{title:'查看',type:'default'},{ title: '同意', type: 'default' }, { title: '拒绝', type: 'default' }];
  childrequestDataType=-1;
  isDetailModalShow = false;
  operationButtonB = [{title:'详情',type:'default'}]
  isDetailOverShow=false;
  isDetailErrorShow=false;
  detailWindowsTabs = [];
  operationButtonC=[{title:'详情',type:'default'}]
  
  selectData = {}
  selectDataA={}
  selectDataB={}
  requestoverParams={};
  @ViewChild("unPendedTable")
  private unPendedTableRef: LZcommonTableComponent;
  @ViewChild("overParamsTable")
  private overParamsTable: LZcommonTableComponent;
  @ViewChild("ErrorParamTable")
  private ErrorParamTable: LZcommonTableComponent;

  constructor(private httpSev: BaseHttpService, private appSev: AppService, private mainSev: MainService, private router: Router,private messageSev:NzMessageService) {
    this.mainSev.setBreadDataWithUrl(window.app["routesArr"], this.router.url)
  }
  ngAfterViewInit() {


    setTimeout(() => {
      console.info("ngAfterViewInit", this.unPendedTableRef);
    }, 2000);

  }

  ngOnInit() {
    let path = this.httpSev.path;
    this.url = path.baseUrl + path.getData;

    let passCard = this.appSev.app.pages['securityCheck'];
    this.requestParams = this.appSev.app.pages.securityCheck.requestParams;
    this.requestDataType = this.httpSev.dataT.HostTableDataEM;
    this.tabs = passCard.tabs;
    this.requestoverParams=this.appSev.app.pages.securityCheck.requestoverParams;
    this.requestErrorParams=this.appSev.app.pages.securityCheck.requestErrorParams;
    this.tabsB=passCard.tabsB;
    this.tabsA=passCard.tabsA;
  }

  closeModal(e){
    this.isDetailModalShow = false;
  }
  closeOver(e){
this.isDetailOverShow=false;

 }
 closeError(e){
this.isDetailErrorShow=false;

 }
 operationBtnNotiB(e){
if(e.i==0){
this.isDetailOverShow=true;
this.selectDataA=e.data;
let passCard = this.appSev.app.pages['securityCheck'];
this.detailWindowsTabs = passCard.tabs;
this.childurl = this.httpSev.path.baseUrl + this.httpSev.path.getSubData;
this.childrequestParams = Object.assign({}, this.requestoverParams);
this.childrequestParams['subResid'] =564580620519 ;
this.childrequestParams['hostrecid'] = e.data['REC_ID'];
delete this.childrequestParams['getcolumninfo'];
this.childrequestDataType = this.httpSev.dataT.AttachTableDataEM;


}

 }
 operationBtnNotiC(e){
  if(e.i==0){
  this.isDetailErrorShow=true;
  this.selectDataB=e.data;
  let passCard = this.appSev.app.pages['securityCheck'];
  this.detailWindowsTabs = passCard.tabs;
  this.childurl = this.httpSev.path.baseUrl + this.httpSev.path.getSubData;
  this.childrequestParams = Object.assign({}, this.requestErrorParams);
  this.childrequestParams['subResid'] =564580620519 ;
  this.childrequestParams['hostrecid'] = e.data['REC_ID'];
  delete this.childrequestParams['getcolumninfo'];
  this.childrequestDataType = this.httpSev.dataT.AttachTableDataEM;
  
  
  }
  
   }

  operationBtnNoti(e) {
    if(e.i == 0){
      this.isDetailModalShow = true;
      this.selectData = e.data;
      let passCard = this.appSev.app.pages['securityCheck'];
      this.detailWindowsTabs = passCard.tabs;
      this.childurl = this.httpSev.path.baseUrl + this.httpSev.path.getSubData;
      this.childrequestParams = Object.assign({}, this.requestParams);
      this.childrequestParams['subResid'] =564580620519 ;
      this.childrequestParams['hostrecid'] = e.data['REC_ID'];
      delete this.childrequestParams['getcolumninfo'];
      this.childrequestDataType = this.httpSev.dataT.AttachTableDataEM;
      
     
    }else if (e.i == 1) {
      e.data.C3_563904353966 = 'Y'
      let url = this.httpSev.path.baseUrl + this.httpSev.path.saveData;
      let param = {
        resid: 561658879836,
        data: e.data,
      }
      this.httpSev.baseRequest('POST', url, param, this.httpSev.dataT.FixOneDataEM).subscribe(data => {
        console.info("data",data);
        if(data && (data.error == 0 || data.Error == 0)){
            this.unPendedTableRef._refreshData();
           
            this.overParamsTable._refreshData();
        }else{
          this.messageSev.error(data.message || '操作失败');
        }
      })

    } else {
      e.data.C3_563904353966 = 'N'
      let url = this.httpSev.path.baseUrl + this.httpSev.path.saveData;
      let param = {
        resid: 561658879836,
        data: e.data,
      }
      this.httpSev.baseRequest('POST', url, param, this.httpSev.dataT.FixOneDataEM).subscribe(data => {
        console.info("data",data);
       if(data &&(data.error ==0|| data.Error==0)){
            this.unPendedTableRef._refreshData();
            this.ErrorParamTable._refreshData();

       }else{
         this.messageSev.error(data.message||'操作失败');
       }


      })


    }
  }

}
