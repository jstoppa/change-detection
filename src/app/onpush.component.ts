import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-onpush',
  template: `
  <div *ngIf="iteration<4" style="border: 1px solid #000; padding:10px; text-align:top">
    OnPush - {{value?.text}}
    <app-onpush [value]="value?.value" [iteration]="iteration+1"></app-onpush>
  </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnpushComponent implements OnInit {
  @Input() value: any;
  @Input() iteration: number;

  constructor() { }

  ngOnInit() {
  }

}
