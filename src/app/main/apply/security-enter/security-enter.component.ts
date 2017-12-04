import { Component, OnInit,ViewChild ,AfterViewInit} from '@angular/core';
import { BaseHttpService } from '../../../base-http-service/base-http.service';
import { AppService } from '../../../app.service';
import { MainService } from '../../main.service';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';
import { LZcommonTableComponent } from '../../../../../src/lib/lzTableComponent/commonTable/lzcommon-table.component'
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
  subResidB='';
  subResidC='';
  tabs = [];
  tabsB=[];
  tabsA=[];
  tabsC=[];
  isEditCustomPosition = true;
  isAddCustomPosition = true;
  addFormName = 'add';
  operationButton=[{title:"确认进入",type:'default'},{title:"撤销",type:'default'}];
  operationButtonB=[{title:"出门确认",type:'default'}];
  requestovergooutParams={};
  requestungooutParams={};
  requestCancelgooutParams={};
  
  @ViewChild("enterTable")
  private enterTableRef: LZcommonTableComponent;
  @ViewChild("ungouttable")
  private ungooutTableRef: LZcommonTableComponent;
  @ViewChild("overgoouttable")
  private overgooutTableRef: LZcommonTableComponent;
  @ViewChild("Cancelgoouttable")
  private CancelgoouttableRef:LZcommonTableComponent;
  constructor(private httpSev: BaseHttpService,private appSev:AppService,private mainSev:MainService,private router:Router,private messageSev:NzMessageService ) {
    this.mainSev.setBreadDataWithUrl(window.app["routesArr"], this.router.url);
  }

  ngOnInit() {
    let path = this.httpSev.path;
    this.url = path.baseUrl + path.getData;
    let passCard = this.appSev.app.pages['securityEnter'];
    this.requestParams = passCard.requestParams;
    this.subResid = passCard.subResid;
    
    this.addFormName = passCard.addFormName;
    this.tabs = passCard.tabs;
    this.isEditCustomPosition = passCard.isEditCustomPosition;
    this.isAddCustomPosition = passCard.isEditCustomPosition;
    this.requestDataType = this.httpSev.dataT.HostTableDataEM;
    this.tabsA=passCard.tabsA;
    this.tabsB=passCard.tabsB;
    this.tabsC=passCard.tabsC;
    this.requestovergooutParams=this.appSev.app.pages.securityEnter.requestovergooutParams;
    this.requestungooutParams=this.appSev.app.pages.securityEnter.requestungooutParams;
    this.requestCancelgooutParams=this.appSev.app.pages.securityEnter.requestCancelgooutParams
  }
  operationBtnNoti(e){
    if(e.i==0){e.data.C3_561654194849 ='Y'
    let url =this.httpSev.path.baseUrl+this.httpSev.path.saveData;
    let param={
      resid:561753056393,
      data:e.data,
    }
    this.httpSev.baseRequest('POST' ,url, param, this.httpSev.dataT.FixOneDataEM).subscribe(data => {
      console.info("data",data);
      if(data && (data.error == 0 || data.Error == 0)){
         this.messageSev.success(data.message||'提交成功')
         this.enterTableRef._refreshData();
         this.ungooutTableRef._refreshData();
        
      }else{
        this.messageSev.error(data.message || '操作失败');
      }
    })

    }
   else{
     e.data.C3_565196292050 ='Y'
   let url =this.httpSev.path.baseUrl+this.httpSev.path.saveData;
   let zaram={
     resid:561753056393,
     data:e.data,
   }
   this.httpSev.baseRequest('POST' ,url, zaram, this.httpSev.dataT.FixOneDataEM).subscribe(data => {
     console.info("data",data);
     if(data && (data.error == 0 || data.Error == 0)){
        this.messageSev.success(data.message||'撤销成功')
        this.enterTableRef._refreshData();
        this.CancelgoouttableRef._refreshData();
     }else{
       this.messageSev.error(data.message || '操作失败');
     }
   })


   }



   }
   operationBtnNotiB(e){
if(e.i==0){
e.data.C3_561654265721 ='Y'
let url =this.httpSev.path.baseUrl+this.httpSev.path.saveData;
let pppam={
  resid:564858118261,
  data:e.data,
}
this.httpSev.baseRequest('POST',url,pppam,this.httpSev.dataT.FixOneDataEM).subscribe(data=>{

  if(data && (data.error == 0 || data.Error == 0)){
    this.messageSev.success(data.message||'确认通过')
    this.overgooutTableRef._refreshData();
    this.ungooutTableRef._refreshData();
  
 }else{
   this.messageSev.error(data.message || '操作失败');
 }



})




}










   }

}
