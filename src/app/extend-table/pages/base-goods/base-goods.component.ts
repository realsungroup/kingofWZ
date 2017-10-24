import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { BaseHttpService } from '../../../base-http-service/base-http.service';
import { FormItemElementEM, FormItemTypeEM } from '../../../../lib/lzTableComponent/enum/form-item.enum';
import { NzMessageService, NzModalService } from 'ng-zorro-antd';

@Component({
  selector: 'base-goods',
  template: '<div><div>',
  styleUrls: ['./base-goods.component.scss']
})
export class BaseGoodsComponent implements OnInit {

  @Input() detail = false;
  @Input() resid = '';
  @Output() eventNoti = new EventEmitter();//与lzcommontable组件通信
  @Input() data: any = {};
  @Input() tabs: any[] = [];
  @Input() addFormName:string = '';

  _data: any = {
    C3_561648705356: null,
    C3_561648718493: null,
    C3_561648769212: null,
    C3_561648790262: null,
    C3_561648813629: null,
    C3_561648820757: null,
    C3_561648837854: null,
    C3_561648846303: null,
    C3_561648899389: null,
    C3_561648926062: null,
    C3_561648995990: null,
    C3_561649020170: null,
    C3_561649023008: null,
    C3_561649034242: null,
    C3_561649048171: null,
    C3_561649105932: null,
    C3_561649132110: null,
    C3_561649189367: null,
    C3_561649232312: null
  };
  _dataPropArr = [];
  _theMainModal: boolean = true;//是否打开formresource组件（false为打开）
  path: any;//appConfig中路径
  advDictionaryListData: any;//传递给formresource组件的数据
  title: any = {};
  titleArray: any = [];
  url: string = '';
  requestParams: any = {};
  requestDataType: number = -1;

  constructor(protected httpSev: BaseHttpService, private messageSev: NzMessageService, private modalSev: NzModalService) { }

  ngOnInit() {
    let path = this.httpSev.path;
    this.url = path.baseUrl + path.getSubData;
    this.requestParams = {
      resid:561753038288 ,
      subResid:562075064438,
      hostrecid:this.data['REC_ID'] || '',
      pageIndex: 0,
      pageSize: 50,
      // getcolumninfo: 1
    }
    this.requestDataType = this.httpSev.dataT.AttachTableDataEM;
    this.tabs = [{
      isSubForm: false,
      formName: "default",
    }]

    this.getKeysData(this.resid)
  }

  //获取窗体的数据
  getKeysData(resid: string) {
    this.getData('add', resid).subscribe(
      data => {
        if (data && data.data && data.data.columns) {
          //筛选出字段类型数据
          this.titleArray = data.data.columns.filter(item => (item.ColName && item.ColName.length) || (item.FrmFieldFormType == FormItemElementEM.ImageForUrlCol));

          Object.keys(this._data).forEach(key => {
            this._data[key] = this.titleArray.filter(item => item['ColName'] == key)[0] || {};
          })
        }
      },
      err => {
        this.messageSev.error(JSON.stringify(err));
      }
    )
  }

  getData(formName: string, resid: string) {
    let path = this.httpSev.path;
    let urlStr: string = path.baseUrl + path.getFormDefine;
    let params: any = {
      "resid": resid,//id
      "formname": formName//窗体名
    }
    return this.httpSev.baseRequest("GET", urlStr, params, -1);
  }

  findTitle(prop: string) {
    const title = this.titleArray.filter(item => item['ColName'] == prop);
    if (title.length > 0) return title[0];
    else return {}
  }

  imgElementAddColName(data: Array<any>): Array<any> {
    data.forEach(item => {
      let frmColName = item.FrmColName;
      let index = frmColName.lastIndexOf("__") + 2;
      item['lzImgUrl'] = '';
      if (index >= 0) item.lzImgUrl = frmColName.substring(index, frmColName.length);
    })
    return data;
  }

  //´¦ÀíÍ¼Æ¬Ñ¡Ôñ¿Ø¼þµÄtype
  fixTitleForImgType(titleArr: Array<any>, imgElementArr: Array<any>): Array<any> {
    imgElementArr.forEach(imgEle => {
      titleArr.forEach(titleItem => {
        if (titleItem['ColName'] == imgEle.lzImgUrl) titleItem['ColValType'] = FormItemTypeEM.ImageSelect;
      })
    })
    return titleArr;
  }

  /*-------------子组件回调---------------*/
  formItemDynamicClick(note) {
    //打开formitemresource 组件
    let title = note['title'];
    this.advDictionaryListData = title.AdvDictionaryListData;

    this._theMainModal = false;
  }

  //formItemDynamic刷新数据
  update(note: any) {
    let a = Object.assign({}, this.data);
    this.data = a;
  }

  formItemResourceNoti(note: any) {
    if (note['name'] == 'close') this._theMainModal = true;
    else if (note['name'] == 'select') {//高级字典选择返回数据
      let data = note['data'];
      let title = note['title'];
      title = title.filter(item => item.CDZ2_TYPE == 0)//过滤字段，为1的不能匹配
      title.forEach(element => {
        let tmpData = Object.assign({}, this.data);
        tmpData[element.CDZ2_COL1] = data[element.CDZ2_COL2];
        this.data = tmpData;
        // console.info("字段" + element.CDZ2_COL2 + "匹配到" + element.CDZ2_COL1);
      });
      this._theMainModal = true;
    }
  }

  //提交事件(附表)
  submitClick(type) {
    let path = this.httpSev.path;
    let url = path.baseUrl + path.saveData;
    let params = {
      resid: this.resid,
      data: this.data
    }

    this.httpSev.baseRequest("POST", url, params, type).subscribe(
      data => {
        this.eventNoti.emit({ name: "update", data: this.data });//通知父组件更新数据
        // alert("save success" + JSON.stringify(data));
      },
      err => {
        this.messageSev.error("保存失败" + JSON.stringify(err));
      }
    )
  }

}
