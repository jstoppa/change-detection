import { Component, OnInit } from '@angular/core';
import { timeout } from 'q';
import { ServiceService } from './service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <div style="grid-area: top-left">Normal</div>
    <div style="grid-area: top-center">RxJs</div>
    <div style="grid-area: top-right">Subscribe</div>
    <div style="grid-area: middle-left"><app-default [value]="value" [iteration]="1"></app-default></div>
    <div style="grid-area: bottom-left"><app-onpush [value]="value" [iteration]="1"></app-onpush></div>
    <div style="grid-area: middle-center"><app-default [value]="data$ | async" [iteration]="1"></app-default></div>
    <div style="grid-area: bottom-center"><app-onpush [value]="data$ | async" [iteration]="1"></app-onpush></div>
    <div style="grid-area: middle-right"><app-default [value]="subValue" [iteration]="1"></app-default></div>
    <div style="grid-area: bottom-right"><app-onpush [value]="subValue" [iteration]="1"></app-onpush></div>
  </div>
  <div class="update-area">
    <textarea [(ngModel)]="textAreaValue" class="text-area" style="grid-area: text-area"></textarea>
    <button style="grid-area: top-right; height:20px;" (click)="sendValue(1)">value</button>
    <button style="grid-area: middle-right; height:20px;" (click)="sendValue(2)">value.value</button>
    <button style="grid-area: bottom-right; height:20px;" (click)="sendValue(3)">value.value.value</button>
  </div>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  textAreaValue: string;
  data$ = this.dataService.getData();
  dataSub$ = this.dataService.getData();
  value = { text: 'hello', value: {  text: 'hello', value: { text: 'hello', value: 3 } } };
  subValue = { text: 'hello', value: { text: 'hello', value: { text: 'hello', value: 3 } } };

  constructor(private dataService: ServiceService) {
    this.dataSub$.subscribe(value => this.subValue = value);
  }

  sendValue(n: number) {
    switch (n) {
      case 1:
        this.value.text = this.textAreaValue;
        this.dataService.setData( { text: this.textAreaValue });
        break;
      case 2:
        this.dataService.setData( { value: { text: this.textAreaValue } });
        this.value.value.text = this.textAreaValue;
        break;
      case 3:
        this.dataService.setData( { value: { value: { text: this.textAreaValue } } });
        this.value.value.value.text = this.textAreaValue;
        break;
    }

  }
}
