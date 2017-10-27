import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'table-tbody,[table-tbody]',
    templateUrl: './table-tbody.html'
})

export class TableTbodyComponent {

    _tableBtnArr = [];
    _orginBtnType = ['primary', 'default', 'default', 'danger'];
    _orginBtnTitle = ['详情', '操作', '附表', '删除'];

    @Input() set tableBtnArr(value) {
        this._tableBtnArr = value;
    }
    @Input() tableData = [];
    @Input() operationButton = [];
    @Input() operationOrginButton = [];
    @Input() titleArr = [];
    @Output() orginBtnClickEM = new EventEmitter();
    @Output() customBtnClickEM = new EventEmitter();
    @Output() serveBtnClickEM = new EventEmitter();

    orginBtnClick($event, index, data, dataIndex) {
        this.orginBtnClickEM.emit({ $event, index, data, dataIndex });
    }

    btnClick($event, i, data) {
        this.customBtnClickEM.emit({ $event, i, data })
    }

    serveMenuClick($event, btnI, btn, dataIndex) {
        this.serveBtnClickEM.emit({ $event, btnI, btn, dataIndex });
    }
}