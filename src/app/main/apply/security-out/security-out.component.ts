import { Component, OnInit,AfterViewInit, ViewChild} from '@angular/core';
import { BaseHttpService } from '../../../base-http-service/base-http.service';
import { AppService } from '../../../app.service';
import { MainService } from '../../main.service';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';
import { LZcommonTableComponent } from '../../../../../src/lib/lzTableComponent/commonTable/lzcommon-table.component'
@Component({
  selector: 'app-security-out',
  templateUrl: './security-out.component.html',
  styleUrls: ['./security-out.component.scss']
})
export class SecurityOutComponent implements OnInit , AfterViewInit{

  url: string = '';
  requestParams: any = {};
  requestDataType: number = -1;
  subResid = '';
  tabs = [];
  tabsA=[];
  tabsB=[];
  tabsC=[];
  tabsG=[];
  tabsD=[];
  tabsE=[];
  tabsF=[];
  isEditCustomPosition = true;
  isAddCustomPosition = true;
  addFormName = 'add';
  requestSubmitParams={};
  requestRejectParams={};
  requestCheckParams={};
  requestUnpassParams={};
  requestPassParams={};
  requestErrorPassParams={};
  requestCancelParams={};
  tableBtnStrArr= [];
  @ViewChild("unApproveTable")
  private unApproveTable: LZcommonTableComponent;
  @ViewChild("RejectTable")
  private RejectTable: LZcommonTableComponent;
  @ViewChild("CancelTable")
  private CancelTable: LZcommonTableComponent;
  operationButton=[{title:"提交申请",type:'default'},{title:"撤销",type:'default'}]
  operationButtonB=[{title:"撤销",type:'default'}]

  constructor(private httpSev: BaseHttpService,private appSev:AppService,private mainSev:MainService,private router:Router,private messageSev:NzMessageService) {
    this.mainSev.setBreadDataWithUrl(window.app["routesArr"], this.router.url);
  }

  ngOnInit() {
    let path = this.httpSev.path;
    this.url = path.baseUrl + path.getData;
    let passCard = this.appSev.app.pages['securityOut'];
    this.requestParams = passCard.requestParams;
    this.subResid = passCard.subResid;
    this.addFormName = passCard.addFormName;
    this.tabs = passCard.tabs;
    this.isEditCustomPosition = passCard.isEditCustomPosition;
    this.isAddCustomPosition = passCard.isEditCustomPosition;
    this.requestDataType = this.httpSev.dataT.HostTableDataEM;
    this.requestSubmitParams=this.appSev.app.pages.securityOut.requestSubmitParams;
    this.requestRejectParams=this.appSev.app.pages.securityOut.requestRejectParams;
    this.requestCheckParams=this.appSev.app.pages.securityOut.requestCheckParams;
    this.requestCancelParams=this.appSev.app.pages.securityOut.requestCancelParams;
    this.requestUnpassParams=this.appSev.app.pages.securityOut.requestUnpassParams;
    this.requestPassParams=this.appSev.app.pages.securityOut.requestPassParams;
    this.requestErrorPassParams=this.appSev.app.pages.securityOut.requestErrorPassParams;
    this.tabsA=passCard.tabsA;
    this.tabsB=passCard.tabsB;
    this.tabsC=passCard.tabsC;
    this.tabsD=passCard.tabsD;
    this.tabsE=passCard.tabsE;
    this.tabsF=passCard.tabsF;
    this.tabsG=passCard.tabsG;
    this.tableBtnStrArr=this.appSev.app.pages.securityOut.tableBtnStrArr;
  }
  ngAfterViewInit() {


        setTimeout(() => {
          console.info("ngAfterViewInit", this.unApproveTable);
        }, 2000);

      }
  operationBtnNoti(e){
    if(e.i==0){e.data.C3_564681179531 ='Y'
    let url =this.httpSev.path.baseUrl+this.httpSev.path.saveData;
    let param={
      resid:561753093403,
      data:e.data,
    }
    this.httpSev.baseRequest('POST' ,url, param, this.httpSev.dataT.FixOneDataEM).subscribe(data => {
      console.info("data",data);
      if(data && (data.error == 0 || data.Error == 0)){
         this.messageSev.success(data.message||'提交成功')
         this.unApproveTable._refreshData();
         this.RejectTable._refreshData();
         this.CancelTable._refreshData();
      }else{
        this.messageSev.error(data.message || '操作失败');
      }
    })

    }
   else{
     e.data.C3_564686728325 ='Y'
   let url =this.httpSev.path.baseUrl+this.httpSev.path.saveData;
   let zaram={
     resid:561753093403,
     data:e.data,
   }
   this.httpSev.baseRequest('POST' ,url, zaram, this.httpSev.dataT.FixOneDataEM).subscribe(data => {
     console.info("data",data);
     if(data && (data.error == 0 || data.Error == 0)){
        this.messageSev.success(data.message||'撤销成功')
        this.unApproveTable._refreshData();
        this.CancelTable._refreshData();
     }else{
       this.messageSev.error(data.message || '操作失败');
     }
   })


   }



   }
   operationBtnNotiB(e){
if(e.i==0){
e.data.C3_564686728325 ='Y'
let url =this.httpSev.path.baseUrl+this.httpSev.path.saveData;
let pppam={
  resid:564685647399,
  data:e.data,
}
this.httpSev.baseRequest('POST',url,pppam,this.httpSev.dataT.FixOneDataEM).subscribe(data=>{

  if(data && (data.error == 0 || data.Error == 0)){
    this.messageSev.success(data.message||'撤销成功')
    this.RejectTable._refreshData();
    this.CancelTable._refreshData();
 }else{
   this.messageSev.error(data.message || '操作失败');
 }



})




}










   }



  }

