import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-default',
  template: `
  <div *ngIf="iteration<4" style="border: 1px solid #000; padding:10px; text-align:top">
    Default - {{value?.text}}
    <app-default [value]="value?.value" [iteration]="iteration+1"></app-default>
  </div>
  `,
})
export class DefaultComponent implements OnInit {
  @Input() value: any;
  @Input() iteration: number;

  constructor() { }

  ngOnInit() {
  }

}
