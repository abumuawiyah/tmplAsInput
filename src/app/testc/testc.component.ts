import { Component, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-testc',
  templateUrl: './testc.component.html',
  styleUrls: ['./testc.component.css']
})
export class TestcComponent implements OnInit {
  @Input() set test(value) {
    this._test = value;

  }

  get test() {
    return this._test;
  }
  private _test: any;

  @ViewChild('cellTemplate', { read: ViewContainerRef, static: true })
  cellTemplate: ViewContainerRef;
  cellContext: any = {
    data: [1,2,3]
  };

  constructor() { }

  ngOnInit() {
    console.log('ghj', this.test)
  }

}