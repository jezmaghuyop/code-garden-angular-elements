import { Component, Input, OnInit, OnChanges, SimpleChanges, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class CustomTableComponent implements OnInit, OnChanges {

  @Input() headers: Array<string> = [];
  @Input() bodyData: any;
  @Input() actions: Array<{name: string, action: string}> = [];
  
  @Output() actionEvent: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(simpleChanges: SimpleChanges): void {

    if (simpleChanges['headers'] && simpleChanges['headers'].currentValue &&
      typeof simpleChanges['headers'].currentValue === 'string') {
      this.headers = JSON.parse(simpleChanges['headers'].currentValue);
      console.log(this.headers);
    }

    if (simpleChanges['bodyData'] && simpleChanges['bodyData'].currentValue &&
      typeof simpleChanges['bodyData'].currentValue === 'string') {
      this.bodyData = JSON.parse(simpleChanges['bodyData'].currentValue);
      console.log(this.bodyData);
    }
  }

  dataKeys(data: any): string[] {
    return Object.keys(data);
  }

  triggerAction(action: string) {    
    this.actionEvent.emit(action);
  }

}
